import { json } from "@remix-run/node";
//import prisma db
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

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

   
  const { firstName, lastName, emailAddress, countryCode, phoneNumber, designOptions, metalOptions, preferredPriceRange, preferredContactMethod, availabilityOption, designNotes } = formData;

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
      ${imageUrls.length > 0 ? imageUrls.map(url => `<p><img src="${url}" alt="Design Image" style="max-width: 100%; height: auto;" /></p>`).join('') : '<p>No images available</p>'}

    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
};
