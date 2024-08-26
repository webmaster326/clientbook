// app/routes/designform/designdata/callback.jsx
import { json, redirect } from "@remix-run/node";
import axios from 'axios';
import qs from 'querystring';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const shop = url.searchParams.get('shop');
  const storeId = '3e4aecd9-f297-11ee-8941-0ed6751899ff';

  if (!code || !shop) {
    return json({ error: 'Missing code or shop parameter' }, { status: 400 });
  }

  const redirect_uri = `https://www.szirojewelry.com/apps/proxyformdata/callback/`;

  try {
    // Fetch settings from the database
    const settings = await db.settings.findFirst({
      where: { id: 1 } // Adjust the condition if needed
    });

    if (!settings) {
      return json({ error: 'Settings not found' }, { status: 500 });
    }

    const { clientid, clientsecret } = settings;

    // Exchange authorization code for access token
    const tokenResponse = await axios.post('https://auth.clbk.app/token', qs.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri,
      client_id: clientid,
      client_secret: clientsecret
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

     // Return the response data
     return json({
      accessToken: access_token,
      refreshToken: refresh_token
    });


    // Data to be sent to the /webcontact API
    const requestBody = {
      storeId, // Using UUID as the storeId
      clientName: "anjali chawla",
      mobile: "+12147778980",
      email: "anjali.dakshadesign@gmail.com",
      msg: "Hi, This is test message",
      url: `https://${shop}/pages/custom-jewelry-design`
    };

    // Call the /webcontact API with the access token and request body
    const webContactResponse = await axios.post('https://posapi.clbk.app/api/v1/webcontact', requestBody, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    });

    const webContactData = webContactResponse.data;

    await db.userTokens.create({
      data: {
        email : "anjali.dakshadesign@gmail.com",
        accessToken: access_token,
        refreshToken: refresh_token,
        tokenExpiresAt:new Date(Date.now() + expires_in * 1000),
      },
    });

    // Return the response data
    return json({
      accessToken: access_token,
      refreshToken: refresh_token,
      webContactData
    });

  } catch (error) {
    console.error('Error during token exchange:', error.response ? error.response.data : error.message);
    return json({ error: 'Error during token exchange' }, { status: 500 });
  }
};
