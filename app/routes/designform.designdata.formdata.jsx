import { json } from "@remix-run/node";
//import prisma db
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
import { cors } from 'remix-utils/cors';

import axios from 'axios';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';


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


      

         

          response = json({
            message: "Design submitted successfully",
            method: _action,
            designId: designId, // Return the design ID
    
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