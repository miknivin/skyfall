import React from "react";
import { useGenerateUploadPresignedUrlMutation } from "@/redux/api/adminApi";
import axios from "axios";
import toast from "react-hot-toast";

interface FileUploadDropzoneProps {
  documentType: "license" | "registration";
  userID: string;
  onFileUpload?: (document: {
    name: string;
    url: string;
    fileKey: string;
    file: File;
  }) => void;
}

const FileUploadDropzone: React.FC<FileUploadDropzoneProps> = ({
  documentType,
  onFileUpload,
  userID,
}) => {
  const [generateUploadPresignedUrl, { isLoading }] =
    useGenerateUploadPresignedUrlMutation();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file || !onFileUpload) return;

    try {
      const userId = userID;
      // Sanitize file name to replace spaces and special characters
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const fileName = `${generateShortID()}_${sanitizedFileName}`;
      const fileKey = `admin/${userId}/documents/${documentType}/${fileName}`;

      console.log("Uploading fileKey:", fileKey);

      const response = await generateUploadPresignedUrl({
        userId,
        fileType: "document",
        fileName,
        category: documentType,
      }).unwrap();

      const { url } = response.data;

      const s3resp = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
      console.log("S3 Response:", s3resp);

      // Convert presigned URL to original S3 URL
      const originalS3Url = getOriginalS3Url(url);
      console.log("Original S3 URL:", originalS3Url);

      onFileUpload({
        name: fileName,
        url: originalS3Url,
        fileKey,
        file,
      });
      toast.success("File uploaded successfully");
    } catch (error) {
      console.error("Failed to upload file:", error);
      toast.error("Failed to upload file");
    }
  };

  const getOriginalS3Url = (presignedUrl: string): string => {
    try {
      const url = new URL(presignedUrl);
      // Replace spaces with + in the pathname to match S3 key encoding
      const pathname = url.pathname.replace(/%20/g, "+");
      return `${url.origin}${pathname}`;
    } catch (error) {
      console.error("Failed to parse pre-signed URL:", error);
      return presignedUrl;
    }
  };

  const generateShortID = () => Math.random().toString(36).substring(2, 8);

  return (
    <div className="w-100">
      <label
        htmlFor={`dropzone-file-${documentType}`}
        className="d-flex flex-column justify-content-center align-items-center w-100 border border-2 rounded-3 bg-light cursor-pointer"
        style={{
          height: "16rem",
          borderStyle: "dashed",
          borderColor: "#d1d5db",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
      >
        <div className="d-flex flex-column align-items-center justify-content-center pt-5 pb-4">
          <i className="fa-solid fa-upload" />
          <p className="mb-2 text-sm text-secondary">
            <span className="fw-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-secondary">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id={`dropzone-file-${documentType}`}
          type="file"
          className="d-none"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUploadDropzone;
