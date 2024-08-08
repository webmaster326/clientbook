// app/routes/api/upload.jsx
import { json } from "@remix-run/node";
import fs from 'fs';
import path from 'path';
import { Readable, pipeline } from 'stream';
import { promisify } from 'util';
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const pipelineAsync = promisify(pipeline);

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('file');
  const url = new URL(request.url); // Parse the URL from the request
  const designId = url.searchParams.get('designId'); // Extract designId from the query parameters

  // Convert designId to an integer
  const entryId = parseInt(designId, 10);

  if (file && file instanceof File) {
    // Create a path to save the uploaded file in the mounted Render disk path
    const uploadDir = path.join('/uploads', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, file.name);

    try {
      // Use a stream to handle the file upload
      const fileStream = fs.createWriteStream(filePath);

      // Create a readable stream from the file buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      const readableStream = Readable.from(buffer);

      await pipelineAsync(
        readableStream,
        fileStream
      );

      const newUploadFile = await db.uploadFiles.create({
        data: {
          entryId: entryId, // Linking to JewelryDesignForm entry with id
          filename: file.name,
          refreshToken: 'some-refresh-token'
        }
      });

      console.log('Received file:', file.name);
      return json({ 
        success: true, 
        message: 'File uploaded successfully',
        fileUrl: `/files/${file.name}` // Include file URL in the response
      });
    } catch (error) {
      console.error('Error writing file:', error);
      return json({ success: false, message: 'File upload failed' }, { status: 500 });
    }
  }

  return json({ success: false, message: 'No file uploaded' }, { status: 400 });
};
