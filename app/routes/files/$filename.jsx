import { createReadStream, existsSync } from 'fs';
import { join, extname } from 'path';
import { json } from '@remix-run/node';

export const loader = async ({ params }) => {
  const { filename } = params;
  const filePath = join('/uploads', 'uploads', filename);

  if (!existsSync(filePath)) {
    throw new Response("File not found", { status: 404 });
  }

  const fileStream = createReadStream(filePath);
  const mimeType = getMimeType(filePath);

  return new Response(fileStream, {
    headers: {
      "Content-Type": mimeType,
      "Content-Disposition": `inline; filename="${filename}"`,
    },
  });
};

function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  const mimeTypes = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".pdf": "application/pdf",
    ".txt": "text/plain",
    // Add more MIME types if needed
  };
  return mimeTypes[ext] || "application/octet-stream";
}
