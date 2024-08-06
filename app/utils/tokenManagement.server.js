import { json } from "@remix-run/node";
import axios from 'axios';
import qs from 'querystring';
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// Function to refresh the access token
async function refreshToken(user) {
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
     const response = await axios.post('https://auth-dev.clbk.app/token', qs.stringify({
      grant_type: 'refresh_token',
      refresh_token : user.refreshToken,
      client_id: clientid,
      client_secret: clientsecret
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });


    // Check if the response status is OK
    if (response.status !== 200) {
      throw new Error('Failed to refresh token: ' + response.statusText);
    }


     const data = response.data;

  await db.userTokens.update({
    where: { email: user.email },
    data: {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      tokenExpiresAt: new Date(Date.now() + data.expires_in * 1000),
    },
  });

  await db.userTokens.update({
    where: { email: 'anjali.dakshadesign@gmail.com' },
    data: {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      tokenExpiresAt: new Date(Date.now() + data.expires_in * 1000),
    },
  });

  return data.access_token;
} catch (error) { 
  console.error('Error refreshing token:', error);
  throw error;
}
}

// Function to get a valid access token
async function getAccessToken(email) {
  const user = await db.userTokens.findUnique({ where: { email } });

  if (!user) {
    throw new Error('User not found');
  }

  if (new Date() > new Date(user.tokenExpiresAt)) {
    return await refreshToken(user);
  }

  return user.accessToken;
}

export { refreshToken, getAccessToken };
