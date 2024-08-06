import { json } from "@remix-run/node";
//import prisma db
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
import { cors } from 'remix-utils/cors';
import { getAccessToken } from "../utils/tokenManagement.server";
import axios from 'axios';


// get request: accept request with request: customerId, shop, productId.
// read database and return wishlist items for that customer.
export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const first_name = url.searchParams.get("first_name");
    const last_name = url.searchParams.get("last_name");
    const email_address = url.searchParams.get("email_address");

    if (!first_name || !last_name || !email_address) {
      return json({
        message: "Missing data. Required data: first_name, email_address, last_name",
        method: "GET"
      });
    }

   

    // If first_name, last_name, email_address is provided, return wishlist items for that customer.
    /*const wishlist = await db.wishlist.findMany({
      where: {
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
      },
    });*/

    const response = json({
      ok: true,
      message: "Success",
    });

    return cors(request, response);

  } catch (error) {
    console.error(error);
    return json({
      message: "Error handling request",
      error: error.message
    }, { status: 500 });
  }
}

// Expected data comes from post request. If
// first_name, productID, shop
export async function action({ request }) {
  try {
    let data = await request.formData();
    data = Object.fromEntries(data);

    console.log(data);
    const firstName = data.first_name;
    const lastName = data.last_name;
    const emailAddress = data.email_address;
    const countryCode = data.country_code;
    const phoneNumber = data.phone_number;
    const designOptions = data.design_options;
    const metalOptions = data.metal_options;
    const preferredPriceRange = data.preferred_price_range;
    const preferredContactMethod = data.preferred_contact_method;
    const availabilityOption = data.availability_option;
    const designNotes = data.design_notes;
    const fileUpload = 'hello'; // Assuming this is the file path or URL

    const _action = data._action;

    if (!firstName || !lastName || !emailAddress || !_action) {
      return json({
        message: "Missing data. Required data: first_name, last_name, email_address, _action",
        method: _action
      });
    }

    let response;

    switch (_action) {
      case "CREATE":
        
        // Check if the email already exists in the userTokens table
        let userToken;
        try {

          userToken = await db.userTokens.findUnique({
            where: {
              email: emailAddress,
            },
          });

          if (userToken) {
            // Update the existing record
            await db.userTokens.update({
              where: {
                email: emailAddress,
              },
              data: {
                accessToken: 'gsdfgdfgdfgdfg',
                refreshToken: 'fdgdsfgdgdgdf',
                tokenExpiresAt: new Date(Date.now()),
              },
            });
          } else {
            // Insert new record
            await db.userTokens.create({
              data: {
                email: emailAddress,
                accessToken: 'gsdfgdfgdfgdfg',
                refreshToken: 'fdgdsfgdgdgdf',
                tokenExpiresAt: new Date(Date.now()),
              },
            });
          }
        } catch (userTokenError) {
          console.error('Error handling user token:', userTokenError);
          return json({
            message: "Error handling user token",
            error: userTokenError.message
          }, { status: 500 });
        }

        // Insert new data into the JewelryDesignForm table
        let designId;
        let webContactData;
        try {
          const newDesign = await db.jewelryDesignForm.create({
            data: {
              firstName,
              lastName,
              emailAddress,
              countryCode,
              phoneNumber,
              designOptions,
              metalOptions,
              preferredPriceRange,
              preferredContactMethod,
              availabilityOption,
              designNotes,
              fileUpload,
            },
          });

          designId = newDesign.id;

          // Get access token and send data to /webcontact API
          try {
            const userEmail = 'anjali.dakshadesign@gmail.com'; // replace with the actual email retrieval logic
            const accessToken = await getAccessToken(userEmail);
            const storeId = 'bbb9c016-49fd-11ef-9b14-12631956fe63';
            const shop = 'sziro.myshopify.com';

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
            const webContactResponse = await axios.post('https://posapi-dev.clbk.app/api/v1/webcontact', requestBody, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              }
            });

            webContactData = webContactResponse.data;

          } catch (webContactError) {
            console.error('Error with /webcontact API:', webContactError);
            return json({
              message: "Error contacting the external service",
              error: webContactError.message
            }, { status: 500 });
          }

          response = json({
            message: "Design submitted successfully",
            method: _action,
            designId: designId, // Return the design ID
            webContactData // Return the /webcontact API response
          });

        } catch (designError) {
          console.error('Error saving design:', designError);
          return json({
            message: "Error saving design",
            method: _action,
            error: designError.message
          }, { status: 500 });
        }

        return cors(request, response);

      case "PATCH":
        // Handle PATCH request logic here (e.g., update existing design)
        return json({ message: "Success", method: "PATCH" });

      case "DELETE":
        // Handle DELETE request logic here (e.g., remove a design)
        return json({ message: "Success", method: "DELETE" });

      default:
        return new Response("Method Not Allowed", { status: 405 });
    }

  } catch (error) {
    console.error('Error handling request:', error);
    return json({
      message: "Error handling request",
      error: error.message
    }, { status: 500 });
  }
}