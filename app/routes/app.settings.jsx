import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  InlineGrid,
  TextField,
  useBreakpoints,
  Divider,
  Button
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

//import prisma db
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();


export async function loader() {
 // Mock data from the database
  let settings = await db.settings.findFirst();

  console.log('settings ----->',settings);

  return json(settings);
}


// Action function to handle form submission and update settings
export async function action({ request }) {
  // Handle form submission
  const formData = await request.formData();
  const settings = Object.fromEntries(formData);
  console.log("Updated Settings:", settings); // Log the settings for debugging

  //update database
  await db.settings.upsert({
    where : {
      id : 1
    },
    update : {
      clientid:settings.clientid,
      clientsecret:settings.clientsecret
    },
    create : {
      clientid:settings.clientid,
      clientsecret:settings.clientsecret
    }
  })



  return json(settings);
}

export default function SettingsPage() {

  const settings = useLoaderData();
  const { smUp } = useBreakpoints();

  const [formState, setFormState] = useState(settings);

  return (
    <Page>
      <TitleBar title="Settings" />
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Settings
              </Text>
              <Text as="p" variant="bodyMd">
               Update app settings and prefrences.
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
          <Form method="POST">
            <BlockStack gap="400">
              <TextField label="Client Id"   name="clientid" value={formState?.clientid} onChange={(value) => setFormState({...formState, clientid: value})} />
              <TextField label="Client Secret"   name="clientsecret" value={formState?.clientsecret} onChange={(value) => setFormState({...formState, clientsecret: value})} />
              <Button submit>Save</Button>
            </BlockStack>
            </Form>
          </Card>
        </InlineGrid>
  
      </BlockStack>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
