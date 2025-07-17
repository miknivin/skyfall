// StepTwo.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Resort } from "@/types/admin-request";
import PlacesAutocomplete from "@/components/utils/PlacesAPiAuto";
import FileUploadDropzone from "./formInputs/FileUpload";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import PDFPreviewModal from "./modals/PdfPreviewModal";

interface StepTwoProps {
  resorts: Resort[];
  setResorts: (resorts: Resort[]) => void;
  handleBack: () => void;
  handleSubmit: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
  resorts,
  setResorts,
  handleBack,
  handleSubmit,
}) => {
  const getInitialResort = (): Resort => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("stepTwoResort");
      if (savedData) {
        try {
          const parsedData: Resort = JSON.parse(savedData);
          if (
            parsedData &&
            typeof parsedData.name === "string" &&
            parsedData.location &&
            typeof parsedData.location.latitude === "number" &&
            typeof parsedData.location.longitude === "number" &&
            typeof parsedData.location.displayName === "string" &&
            typeof parsedData.location.formattedAddress === "string" &&
            typeof parsedData.description === "string" &&
            Array.isArray(parsedData.documents)
          ) {
            return parsedData;
          }
        } catch (error) {
          console.error(
            "Error parsing stepTwoResort from local storage:",
            error
          );
        }
      }
    }
    return {
      name: "",
      location: {
        latitude: 0,
        longitude: 0,
        displayName: "",
        formattedAddress: "",
      },
      description: "",
      documents: [],
    };
  };

  const [newResort, setNewResort] = useState<Resort>(getInitialResort());
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.user
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<{
    name: string;
    url: string;
    viewUrl?: string;
    file?: File;
    type: "license" | "registration";
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("stepTwoResort", JSON.stringify(newResort));
    }
  }, [newResort]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewResort((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationSelect = (locationData: Resort["location"]) => {
    setNewResort((prev) => ({
      ...prev,
      location: locationData,
    }));
  };

  const handleFileUpload: (
    document: { name: string; url: string; file: File },
    documentType: "license" | "registration"
  ) => void = (document, documentType) => {
    const existingDocIndex =
      newResort.documents?.findIndex((doc) => doc.type === documentType) ?? -1;
    const newDocument = {
      name: document.name,
      url: document.url, // This is now the original S3 URL
      type: documentType,
    };

    if (existingDocIndex >= 0) {
      setNewResort((prev) => ({
        ...prev,
        documents: [
          ...(prev.documents?.slice(0, existingDocIndex) ?? []),
          newDocument,
          ...(prev.documents?.slice(existingDocIndex + 1) ?? []),
        ],
      }));
    } else {
      setNewResort((prev) => ({
        ...prev,
        documents: [...(prev.documents ?? []), newDocument],
      }));
    }
  };

  const handleRemoveFile = (documentType: "license" | "registration") => {
    setNewResort((prev) => ({
      ...prev,
      documents:
        prev.documents?.filter((doc) => doc.type !== documentType) ?? [],
    }));
  };

  const handleAddResort = () => {
    if (!newResort.name || !newResort.location.displayName) {
      alert("Please enter resort name and location");
      return;
    }
    setResorts([...resorts, newResort]);
    setNewResort({
      name: "",
      location: {
        latitude: 0,
        longitude: 0,
        displayName: "",
        formattedAddress: "",
      },
      description: "",
      documents: [],
    });
    if (typeof window !== "undefined") {
      localStorage.removeItem("stepTwoResort");
    }
  };

  const handleEditResort = (index: number) => {
    const resortToEdit = resorts[index];
    setNewResort(resortToEdit);
    const updatedResorts = resorts.filter((_, i) => i !== index);
    setResorts(updatedResorts);
    if (typeof window !== "undefined") {
      localStorage.setItem("stepTwoResort", JSON.stringify(resortToEdit));
    }
  };

  const handleRemoveResort = (index: number) => {
    const updatedResorts = resorts.filter((_, i) => i !== index);
    setResorts(updatedResorts);
    if (typeof window !== "undefined") {
      localStorage.setItem("resorts", JSON.stringify(updatedResorts));
    }
  };

  const getDocumentByType = (type: "license" | "registration") => {
    return newResort.documents?.find((doc) => doc.type === type);
  };

  const handleSubmitWithClear = () => {
    if (
      resorts.length === 0 &&
      (!newResort.name || !newResort.location.displayName)
    ) {
      toast.error("Add at least one resort");
      return;
    }

    if (newResort.name && newResort.location.displayName) {
      setResorts([...resorts, newResort]);
    }

    handleSubmit();

    if (typeof window !== "undefined") {
      localStorage.removeItem("stepTwoResort");
      localStorage.removeItem("resorts");
    }
  };

  const openModal = (document: any) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div>
      <h2>Step 2: Add Resorts</h2>
      <div className="row gx-20">
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              name="name"
              placeholder="Resort Name"
              value={newResort.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <PlacesAutocomplete
              onLocationSelect={handleLocationSelect}
              value={newResort.location.displayName}
            />
          </div>
        </div>
        <div className="col-12 mb-5">
          <textarea
            name="description"
            className="form-control"
            rows={4}
            placeholder="Description"
            value={newResort.description ?? ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-5">
          <p className="pb-0">Upload License</p>
          {getDocumentByType("license") ? (
            <div className="d-flex flex-wrap gap-2">
              <div
                className="btn btn-secondary btn-sm rounded-pill d-flex align-items-center"
                style={{ paddingRight: "4px", paddingLeft: "0" }}
              >
                <button
                  role="button"
                  type="button"
                  className="btn btn-primary btn-sm rounded-pill"
                  onClick={() => openModal(getDocumentByType("license")!)}
                >
                  {getDocumentByType("license")?.name}
                </button>
                <button
                  type="button"
                  role="button"
                  className="btn p-0 text-white"
                  style={{ fontSize: "15px" }}
                  onClick={() => handleRemoveFile("license")}
                >
                  <i className="fa-solid fa-circle-xmark" />
                </button>
              </div>
            </div>
          ) : (
            <FileUploadDropzone
              userID={user?._id || "user_id"}
              documentType="license"
              onFileUpload={(doc) => handleFileUpload(doc, "license")}
            />
          )}
        </div>
        <div className="col-12 mb-5">
          <p className="pb-0">Upload Registration Document</p>
          {getDocumentByType("registration") ? (
            <div className="d-flex flex-wrap gap-2">
              <div
                className="btn btn-secondary btn-sm rounded-pill d-flex align-items-center"
                style={{ paddingRight: "4px", paddingLeft: "0" }}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-sm rounded-pill"
                  onClick={() => openModal(getDocumentByType("registration"))}
                >
                  {getDocumentByType("registration")?.name}
                </button>
                <button
                  type="button"
                  className="btn p-0 text-white"
                  style={{ fontSize: "15px" }}
                  onClick={() => handleRemoveFile("registration")}
                >
                  <i className="fa-solid fa-circle-xmark" />
                </button>
              </div>
            </div>
          ) : (
            <FileUploadDropzone
              userID={user?._id || "user_id"}
              documentType="registration"
              onFileUpload={(doc) => handleFileUpload(doc, "registration")}
            />
          )}
        </div>
        <div className="col-12 mt-5">
          <button
            type="button"
            onClick={handleAddResort}
            className="btn btn-primary me-2"
          >
            Add Resort
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="btn btn-secondary me-2"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmitWithClear}
            className="btn btn-success"
          >
            Submit
          </button>
        </div>

        {resorts.length > 0 && (
          <div className="col-12 mt-3">
            <h4>Added Resorts</h4>
            <div className="d-flex flex-wrap gap-2 my-3">
              {resorts.map((resort, index) => (
                <div
                  key={index}
                  className="btn btn-secondary btn-sm rounded-pill d-flex align-items-center"
                  style={{ paddingRight: "4px", paddingLeft: "0" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-sm rounded-pill"
                    onClick={() => handleEditResort(index)}
                  >
                    {resort.name}
                  </button>
                  <button
                    type="button"
                    className="btn p-0 text-white"
                    style={{ fontSize: "15px" }}
                    onClick={() => handleRemoveResort(index)}
                  >
                    <i className="fa-solid fa-circle-xmark" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <PDFPreviewModal
        isOpen={isModalOpen}
        document={selectedDocument}
        onClose={closeModal}
      />
    </div>
  );
};

export default StepTwo;
