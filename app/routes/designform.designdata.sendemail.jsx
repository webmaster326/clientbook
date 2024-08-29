import { json } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
import nodemailer from 'nodemailer';
import axios from 'axios';

import { getAccessToken } from "../utils/tokenManagement.server";

export const action = async ({ request }) => {
  const { designId } = await request.json();
  
  if (!designId) {
    return json({ success: false, message: 'Design ID is required' }, { status: 400 });
  }

  // Retrieve form data from the database using the designId
  const formData = await db.jewelryDesignForm.findUnique({
    where: { id: designId },
  });

  if (!formData) {
    return json({ success: false, message: 'Design not found' }, { status: 404 });
  }

  // Retrieve related image filenames
  const uploadFiles = await db.uploadFiles.findMany({
    where: { entryId: designId },
  });

  // Construct URLs for images
  const baseUrl = 'https://www.szirojewelry.com/apps/proxyformdata/files/';
  const imageUrls = uploadFiles.map(file => `${baseUrl}${file.filename}`);

  const {
    firstName, lastName, emailAddress, countryCode, phoneNumber, designOptions,
    metalOptions, preferredPriceRange, preferredContactMethod, availabilityOption, designNotes
  } = formData;

  // Modify designNotes to include the image URLs
  const modifiedDesignNotes = `${designNotes}\n\nImages:\n${imageUrls.join('\n')}`;

  // Get access token and send data to /webcontact API
  try {
    const userEmail = 'anjali.dakshadesign@gmail.com'; // replace with the actual email retrieval logic
    const accessToken = await getAccessToken(userEmail);
    const storeId = '3e4aecd9-f297-11ee-8941-0ed6751899ff';
    const shop = 'sziro-jewelry.myshopify.com';

    // Data to be sent to the /webcontact API
    const requestBody = {
      storeId, // Using UUID as the storeId
      clientName: firstName,
      mobile: phoneNumber,
      email: emailAddress,
      msg: designNotes,
      url: `https://${shop}/pages/custom-jewelry-design`
    };

    // Call the /webcontact API with the access token and request body
    const webContactResponse = await axios.post('https://posapi.clbk.app/api/v1/webcontact', requestBody, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    const webContactData = webContactResponse.data;

    // If the API call is successful, send the email
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Use Gmail's service
        auth: {
          user: 'szirojewelry1@gmail.com', // Your Gmail address
          pass: 'rjxm dmtb jstz tnbz', // Your Gmail password or app password
        },
      });

      const mailOptions = {
        from: '"Sziro" <szirojewelry1@gmail.com>',
        to: 'bizsales@sziro.com', // Main recipient
        cc: 'webmaster@creativeklick.com', // CC recipient
        subject: 'Your Jewelry Design Submission',
        html: `
          <h1>Jewelry Design Submission</h1>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email Address:</strong> ${emailAddress}</p>
          <p><strong>Country Code:</strong> ${countryCode}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Design Options:</strong> ${designOptions}</p>
          <p><strong>Metal Options:</strong> ${metalOptions}</p>
          <p><strong>Preferred Price Range:</strong> ${preferredPriceRange}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</p>
          <p><strong>Availability Option:</strong> ${availabilityOption}</p>
          <p><strong>Design Notes:</strong> ${designNotes}</p>
          <div style="display:flex; gap:10px;">
          ${imageUrls.length > 0 ? imageUrls.map(url => `<img src="${url}" alt="Design Image" style="max-width: 150px;" />`).join('') : '<p>No images available</p>'}
         </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return json({ success: true, message: 'Email sent and data submitted to external service successfully', webContactData });

    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return json({ success: false, message: 'Error sending email', error: emailError.message }, { status: 500 });
    }

  } catch (webContactError) {
    console.error('Error with /webcontact API:', webContactError);
    return json({ success: false, message: 'Error contacting the external service', error: webContactError.message }, { status: 500 });
  }
};
