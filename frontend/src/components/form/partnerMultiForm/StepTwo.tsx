"use client";

import React, { useState } from "react";
import { Resort } from "@/types/admin-request";
import PlacesAutocomplete from "@/components/utils/PlacesAPiAuto";
import FileUploadDropzone from "./formInputs/FileUpload";

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
  const [newResort, setNewResort] = useState<Resort>({
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewResort((prev:any) => ({ ...prev, [name]: value }));
  };

  const handleLocationSelect = (locationData: Resort["location"]) => {
    setNewResort((prev:any) => ({
      ...prev,
      location: locationData,
    }));
  };

  const handleFileUpload = (
    document: { name: string; url: string },
    documentType: "license" | "registration"
  ) => {
    // Check if a document of the same type already exists
    const existingDocIndex =
      newResort.documents?.findIndex((doc:any) => doc.type === documentType) ?? -1;
    const newDocument = { ...document, type: documentType };

    if (existingDocIndex >= 0) {
      // Replace the existing document of the same type
      setNewResort((prev:any) => ({
        ...prev,
        documents: [
          ...(prev.documents?.slice(0, existingDocIndex) ?? []),
          newDocument,
          ...(prev.documents?.slice(existingDocIndex + 1) ?? []),
        ],
      }));
    } else {
      // Add the new document
      setNewResort((prev:any) => ({
        ...prev,
        documents: [...(prev.documents ?? []), newDocument],
      }));
    }
  };

  const handleRemoveFile = (documentType: "license" | "registration") => {
    setNewResort((prev:any) => ({
      ...prev,
      documents:
        prev.documents?.filter((doc:any) => doc.type !== documentType) ?? [],
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
  };

  const handleEditResort = (index: number) => {
    const resortToEdit = resorts[index];
    setNewResort(resortToEdit);
    const updatedResorts = resorts.filter((_, i) => i !== index);
    setResorts(updatedResorts);
  };

  const getDocumentByType = (type: "license" | "registration") => {
    return newResort.documents?.find((doc:any) => doc.type === type);
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
                  type="button"
                  className="btn btn-primary btn-sm rounded-pill"
                  disabled
                >
                  {getDocumentByType("license")?.name}
                </button>
                <button
                  type="button"
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
                  disabled
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
            onClick={handleSubmit}
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
                    onClick={() => handleEditResort(index)}
                  >
                    <i className="fa-solid fa-circle-xmark" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
