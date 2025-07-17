"use client";

import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import { AdminRequest } from "@/types/admin-request";
import StepTwo from "./StepTwo";
import { useAdminRequestMutation } from "@/redux/api/adminApi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const PartnerMultiForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.user
  );
  const [formData, setFormData] = useState<AdminRequest>({
    userId: user ? user._id : "",
    name: "",
    email: "",
    phone: "",
    requestDetails: {
      resorts: [],
    },
  });

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please log in to access this form.");
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const [adminRequest, { isLoading, isError, error }] =
    useAdminRequestMutation();

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      // Ensure userId is set
      const updatedFormData = {
        ...formData,
        userId: user?._id || formData.userId || "680f2cb70fdc0bb41dc0f3a1",
      };

      // Since files are already uploaded in FileUploadDropzone,
      // we just need to clean up the documents to remove the file object
      const updatedResorts = (
        updatedFormData.requestDetails?.resorts || []
      ).map((resort) => ({
        ...resort,
        documents: resort.documents?.map((doc: any) => ({
          name: doc.name,
          url: doc.url, // Already the original S3 URL
          type: doc.type,
        })),
      }));

      // Update formData with the processed resorts
      const finalFormData = {
        ...updatedFormData,
        requestDetails: {
          ...updatedFormData.requestDetails,
          resorts: updatedResorts,
        },
      };

      // Submit the form to the backend
      const response = await adminRequest(finalFormData).unwrap();

      // Reset form and local storage
      setFormData({
        userId: user ? user._id : "",
        name: "",
        email: "",
        phone: "",
        requestDetails: {
          resorts: [],
        },
      });
      localStorage.removeItem("stepOneInputs");
      localStorage.removeItem("stepTwoResort");
      localStorage.removeItem("resorts");

      toast.success("Request sent successfully. Await confirmation");
      setStep(1);
    } catch (err: any) {
      console.error("Submission failed:", err);
      setErrorMessage(err?.data?.message || "Unexpected Error");
      toast.error(err?.data?.message || "Unexpected Error");
    }
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-center gap-3 align-items-center w-100 mb-4">
        <div
          className="d-flex align-items-center mb-3 mb-sm-0 me-sm-4"
          style={{ cursor: step > 1 ? "pointer" : "default" }}
          onClick={() => {
            if (step > 1) setStep(1);
          }}
        >
          <span
            className={`d-flex align-items-center justify-content-center rounded-circle border fw-bold ${
              step === 1
                ? "border-primary text-primary"
                : "border-secondary text-secondary"
            }`}
            style={{ width: 32, height: 32, flexShrink: 0 }}
          >
            1
          </span>
          <div className="ms-2">
            <h3 className="fw-medium mb-1" style={{ fontSize: "1rem" }}>
              Basic Details
            </h3>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <span
            className={`d-flex align-items-center justify-content-center rounded-circle border fw-bold ${
              step === 2
                ? "border-primary text-primary"
                : "border-secondary text-secondary"
            }`}
            style={{ width: 32, height: 32, flexShrink: 0 }}
          >
            2
          </span>
          <div className="ms-2">
            <h3 className="fw-medium mb-1" style={{ fontSize: "1rem" }}>
              Add Resorts
            </h3>
          </div>
        </div>
      </div>

      <div>
        {step === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            handleNext={() => setStep(2)}
          />
        )}
        {step === 2 && formData.requestDetails && (
          <StepTwo
            resorts={formData.requestDetails.resorts}
            setResorts={(resorts) =>
              setFormData((prev) => ({
                ...prev,
                requestDetails: { ...prev.requestDetails, resorts },
              }))
            }
            handleBack={handleBack}
            handleSubmit={handleSubmit}
          />
        )}
      </div>

      {isLoading && <p>Submitting...</p>}
      {isError && (
        <p>Error: {(error && errorMessage) || "Submission failed"}</p>
      )}
    </>
  );
};

export default PartnerMultiForm;
