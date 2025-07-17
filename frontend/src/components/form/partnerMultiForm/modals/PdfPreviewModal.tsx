import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import toast from "react-hot-toast";
import { useGenerateViewPresignedUrlMutation } from "@/redux/api/adminApi";

// Reference the worker file from the public directory
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface PDFPreviewModalProps {
  isOpen: boolean;
  document: {
    name: string;
    url: string;
    viewUrl?: string;
    file?: File;
    type: "license" | "registration";
  } | null;
  onClose: () => void;
}

const PDFPreviewModal: React.FC<PDFPreviewModalProps> = ({
  isOpen,
  document,
  onClose,
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfSource, setPdfSource] = useState<string | null>(null);
  const [generateViewPresignedUrl, { isLoading, error }] =
    useGenerateViewPresignedUrlMutation();

  useEffect(() => {
    if (isOpen && document) {
      const fetchPresignedUrl = async () => {
        try {
          // Extract file key from the S3 URL without decoding
          const fileKey = document.url.split(
            "https://skyfall-resorts.s3.eu-north-1.amazonaws.com/"
          )[1];
          console.log("Extracted fileKey:", fileKey); // Debug log

          const response = await generateViewPresignedUrl({
            fileKey,
            fileType: "document",
            category: document.type,
          }).unwrap();
          setPdfSource(response.data.url);
        } catch (err: any) {
          console.error("Failed to fetch presigned URL:", err);
          const errorMessage =
            err?.data?.message === "The specified key does not exist."
              ? "File not found in storage"
              : "Failed to load PDF preview";
          toast.error(errorMessage);
        }
      };

      fetchPresignedUrl();
    } else {
      setPdfSource(null);
    }

    // Cleanup
    return () => {
      setPdfSource(null);
    };
  }, [isOpen, document, generateViewPresignedUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  if (!isOpen || !document) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{document.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div
            className="modal-body d-flex justify-content-center"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            {isLoading ? (
              <p>Loading PDF...</p>
            ) : error ? (
              <p>Error loading PDF: { "Unknown error"}</p>
            ) : pdfSource ? (
              <Document
                file={pdfSource}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) => {
                  console.error("Failed to load PDF:", error);
                  toast.error("Failed to load PDF");
                }}
              >
                {numPages &&
                  Array.from(new Array(numPages), (_, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  ))}
              </Document>
            ) : (
              <p>PDF not available for viewing.</p>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFPreviewModal;
