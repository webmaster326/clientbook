// app/routes/designform/designdata/login.jsx
import { redirect, json } from "@remix-run/node";
//import prisma db
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const shop = url.searchParams.get('shop');

  if (!shop) {
    return json({ error: 'Shop parameter is missing' }, { status: 400 });
  }

  try {
    // Fetch settings from the database
    const settings = await db.settings.findFirst({
      where: { id: 1 } // Adjust the condition if you have multiple settings or different criteria
    });

    if (!settings) {
      return json({ error: 'Settings not found' }, { status: 500 });
    }

    const { clientid, clientsecret } = settings;
    const redirect_uri = `https://${shop}/apps/proxyformdata/callback`;
    const authUrl = `https://auth-dev.clbk.app/login?client_id=${clientid}&client_secret=${clientsecret}&response_type=code&redirect_uri=${redirect_uri}`;

    return redirect(authUrl);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
};
