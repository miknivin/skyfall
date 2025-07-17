import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Function to generate pre-signed URL for uploading
export async function generatePresignedUrlForUpload(
  key,
  fileType,
  expiresIn = 3600
) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    ContentType: fileType === "document" ? "application/pdf" : "image/jpeg",
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn });
  return url;
}
