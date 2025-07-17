import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import AdminRequest from "../models/AdminRequest.js";
import User from "../models/User.js";
import { v4 as uuidv4 } from "uuid";
import { generatePresignedUrlForUpload } from "../utils/preSignedUrls.js";
// Register user   =>  /api/v1/register
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});
export const createAdminRequest = catchAsyncErrors(async (req, res, next) => {
  const { userId, name, email, phone, status, requestDetails, reviewedBy } =
    req.body;

  // Create new AdminRequest
  const adminRequest = await AdminRequest.create({
    userId,
    name,
    email,
    phone,
    status: status || "pending",
    requestDetails: requestDetails || { resorts: [] },
    reviewedBy,
  });

  res.status(201).json({
    success: true,
    data: adminRequest,
  });
});

export const generateUploadPresignedUrl = async (req, res) => {
  const { userId, fileType, fileName, category } = req.body;

  // Generate a unique identifier for the upload session
  const tempSessionId = uuidv4();

  // Construct the temporary S3 key using the provided userId
  let tempKey;
  if (fileType === "document") {
    tempKey = `admin/${userId}/documents/${category}/${fileName}`;
  } else {
    tempKey = `admin/${userId}/images/${fileName}`;
  }

  // Generate pre-signed URL for upload
  const presignedUrl = await generatePresignedUrlForUpload(tempKey, fileType);

  res.status(200).json({
    message: "Pre-signed URL for upload generated successfully",
    data: {
      fileName,
      url: presignedUrl,
      tempKey,
    },
  });
};

export const generateViewPresignedUrl = async (req, res) => {
  try {
    const { fileKey } = req.body;
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileKey,
    });
    console.log("Requested fileKey:", fileKey);
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expires in 1 hour
    res.json({ data: { url } });
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    res.status(500).json({ message: "Failed to generate presigned URL" });
  }
};
