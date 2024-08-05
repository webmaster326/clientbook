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

          await db.userTokens.create({
            data: {
              email: 'anjali.dakshadesign@gmail.com',
              accessToken: 'eyJraWQiOiJZQlh3MHh1SXoxNThqRmx6QmxzZ2sxTlJOVlB0RzhGN2RLeldKdE54NlM4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwYzg5ZTE5OS04MjcyLTRjYWYtYjAyMy1hYzY0NTVhMWJmMDciLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV83bXdYSnFmOUEiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI4dG9scnUyNHNnMnRnbm5obWEzZ3ExcmxkIiwib3JpZ2luX2p0aSI6Ijg1ZDZiZmRhLTNhM2YtNDY2Ny05NGU1LTFiMjRmZWIzNzJlZSIsImV2ZW50X2lkIjoiZDdjNGI2ODktODJjMy00YWY1LThkNzYtNzU2NGMyYjFmNDlhIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhcGkuY2xpZW50Ym9vay5jb21cL3Byb2R1Y3RzOnJlYWQgYXBpLmNsaWVudGJvb2suY29tXC9jbGllbnRzOndyaXRlIGFwaS5jbGllbnRib29rLmNvbVwvY2xpZW50czpyZWFkIGFwaS5jbGllbnRib29rLmNvbVwvc2FsZXM6d3JpdGUgYXBpLmNsaWVudGJvb2suY29tXC9hc3NvY2lhdGVzOnJlYWQgYXBpLmNsaWVudGJvb2suY29tXC9wcm9kdWN0czp3cml0ZSBvcGVuaWQgcHJvZmlsZSBhcGkuY2xpZW50Ym9vay5jb21cL21lc3NhZ2VzOnJlYWQgYXBpLmNsaWVudGJvb2suY29tXC9hc3NvY2lhdGVzOndyaXRlIGFwaS5jbGllbnRib29rLmNvbVwvbWVzc2FnZXM6d3JpdGUgYXBpLmNsaWVudGJvb2suY29tXC9jb2xsZWN0aW9uczpyZWFkIGFwaS5jbGllbnRib29rLmNvbVwvc3RvcmVzOnJlYWQgYXBpLmNsaWVudGJvb2suY29tXC9tZXNzYWdlczpzbXMgYXBpLmNsaWVudGJvb2suY29tXC9zdG9yZXM6d3JpdGUgYXBpLmNsaWVudGJvb2suY29tXC9zYWxlczpyZWFkIGFwaS5jbGllbnRib29rLmNvbVwvY29sbGVjdGlvbnM6d3JpdGUiLCJhdXRoX3RpbWUiOjE3MjI1MTU1NzIsImV4cCI6MTcyMjkyMDIwNCwiaWF0IjoxNzIyODMzODA2LCJqdGkiOiI1NTI4NjQ3Mi0zNTYzLTQ4MmEtYmRiYy0xMTMzODE2YmIzYzQiLCJ1c2VybmFtZSI6InN6aXJvIn0.bmREk-e1tfDFhSui7rFxcTvlwnI-MuxDXiRSkpr5c7WXpORW35GpgRV8GHo_f7fVK8Ve_-p0aFAiVT7pap4OV0lh1rt_aojsy6ykqtOojvaWf30f72hx8J2qV2XcziuxQEc8ryabEa7UF6DqkADgiJVD-ua1rdPYDqs4jqgD9chcHyqd8Rg1DmmUFJU18oLpn7XHeYNumTYeSsxAgKWyv9it7MAyhlzcfpHWvbJgfLkWQIRTeCmlqxSR57AS08gI6ej0HZxizZCpIB9b1p34QnPq_GQEaOzRhVBLCKK0uYhOX-RG7IbMX78WMUmNMbZt08GvMBPB6tojcFUOin6P3Q',
              refreshToken: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.W0HgEJ_1QOoyA-mrvH3PKwPpfQkK2PGachklBYtchP_sP6TX2O-XiuCbeajDwP3C021Wzmis6TlgkZzTbn9jMrs7oxzIJwltbjs-UmskRtnlLDJEwVqy6zXgQftFErOAMJJgivbXTrvOmS-FwJ2_nct1Mh6XoRBMUAJihnZjupPWx1Nq_vQPR-3pRsSbGPHrNyMUXvoGQCdanQkwcBuDrE88VqdwFZVZbhJUwLm-ulPGQVCJTXxfRZKfr_sSDTORvX5lrdTfaYQto-YT0Cg7YKU3Uc1GD7vXpUOKYLl2Mwib3bLSgHsrgIWTvPMk0rISY9TN2DOXt-Hq2SsXSo5Mvw.d-QWdNnjGKkp9Ivy.fktx51KWGGCwAdbsZO9kdl06baD-H7Kog9_8HULVQZTY1d_qDrq_sXc7SemtzANpg5d9UqkVO48AfQ-p57KB5c132P-7cg5EXokPw-1atWXQnFHogBneXHXSCmsyRn1oV0G8AJRv-8PcrkLNODGOLdVDWC39gb9l_8Xi7Rh-jGoAD8Y6FapbFV1RflG_2yjtAbhY3DeA6r9iGrEvdryExPIa4DKZye8-JlmwjNMcBHOmzBx1zLP7DhSyPFzTYGfhgqX0c78eFc7-h0PisY7Dj9NREDho0FqhmqYqsxYXBsSDrAbOa5Gr6ds4fEAqqoPc3-Ey3QFxPXp_ryVPJWtWewnx97JvodVlCICyLu-Sxd09vOiSFqWgiLqUVhdoDh911BmJBa5csmTNwmqlEfWG7BnyIsFGpGtyNw5AjXryXNMWxQ0Wm79_OehQg_eNKs_LsjPI1rbuTCUyPHBmxiu6rWoTmF2s_DJD_V5bRn5iyqCNhjtP7To0fIPrNx1O-m9OTFsst45WrOKeC8wjBe16FMc_c6FrmFo3dNUV7nIMeyb1QoUGOhRnZ5BxRRSHEV7vemH2JhWYlEW6kwSAqomjRob6EMBLwMTMr-3GERbJmCaSJt7U1mHLKbBlolS--AnV9W4BkAkeBIPgSCNT3Hxsw3CqwHweOIkvQVr0OxrgYz0lVU4zi8FjPOT8FKnRvB0C65bqU1krdMtRKMDjCk28Kw7Lii01N91lMILv2DorQ4MYMAZTxlXvuaGCSOV1mXyruj58jaXHNH4rrvmM3GtO5fbjSNTN361odZJpae8AZPZsX9O-PzCPonDAafTmMVZzYntVYEx48KSpMJrQOar5ft6MRhKCgCe56gpI2-IPYnECUuNgiYJVHTHeSSp8lqjnkDbggDhsZi98mRuxND3xW8MmfY87msAanoG_j2gmYfjiVQS07REwHvSGRpwXzkp-6nwv3IyCUJri4uJF6mJsTIQxuj6ozWzBejADUaXH3BUDm-slhyc8epkyQ-GLkgVW0NA8_2opbfeTvNhhw_z37MmJqSbi8KmG6L39A3k2tq_B-xJEDTVO5Rtycy1czkEm78wK3ScZztWfyWSUdkZKVkbdE68I7ARftPqvH05SHw8ijilck51R6YdLVdJk4y3-pMHZ1oi_nCySsbun1TWqaSPxbn_XCeg14rkIoQPkmucanvDBGwr08LDwAhMAwYgZR16tsi61XnavJ_zo8kxqS8XJ1j0nMEvduy1_wfGUgA3wEsd0qPl9FzH-O_-u87wutwedNS6FQ5eX8aN0-CCFHIcLmJrmnGHZSEcQPmiiw5DF2jJMYCqOoNiSjiUeA-C5vYLe4vsIOXi_Xu2v1ZP4nvmBQVc2xrp_sF7yntoJyTFWZaSIt18pcAtL2lTQhp9VTZ7be71yZ64EIgUrByqxnth0PjdLkVl5Pkno5VweJ1P1ZW7grfrNTF4jfzlLVnNlOOfrJvjJp8f74Y08ym_E-RtWJdJoNLUXRE4ci-gxrlzR5geZpdgCC2qCltk_p7XE7m7ligpuzvQFN1gfycE0O8gmds_lSOxOxp3vSjprHHX9mc9BlZ5sHYZC4r4SRyXMSysZjie58n4y5oADQzsDTchZYH0sMqLbqavjOPcZLWsfbdpM8FaDnV5-ykoX_5UDKShp2W9vZhT2VJ0SBvZT4j09Drtpx6E7uJKZD3oD1IFuU5L5DrmayvPZ-zd2R6YVrTXAGlAB812Ec59a8zre2042iowlHqMQ2zHCXHhqgRqx5OsXbouzPg-Pa6q6R_GnRQ9XgpPzzD_QHp5ydoExY6drLWx39R46MhDWrqIJalqlHTl5IHFATsP1L26HmAitHKmwa6IP2nu5lrINpNsHEKQacPbu8XHQlr4nMeK0R-DLPybC35-BeXfoJofEU97AgCztjjccKxsy8i3qRYgKtuKkZaEBAYOoJswXhNabBvlPKPDPgmWjPXau6OeaMEP5agbvyJ7uZ4NMI1RhIz8ec0jzALvjvC_80JwX98zBSdUb53rSYCubfx_h0Am_L-8iksOXfCA-lVemPmnWcq2ejZIesbQ-iULVN-COKCnJtm5DlyPlEiP_f4M6wz_vfxHNn3gRGnIrK6uPnud2--VPwE9zwtv7r3uhMzQsUM8FuPeqsCMjVr2UCXAs4xLKV-tniYFkFCx4oi7vZxI.G4rsabXoX16AseaLxRvLpQ',
              tokenExpiresAt: new Date(Date.now()),
            },
          });


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