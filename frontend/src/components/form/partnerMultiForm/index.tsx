"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import { AdminRequest } from "@/types/admin-request";
import StepTwo from "./StepTwo";
import { useAdminRequestMutation } from "@/redux/api/adminApi";

const PartnerMultiForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<AdminRequest>({
    userId: "67fe199458af3e26e034ec9c",
    name: "",
    email: "",
    phone: "",
    requestDetails: {
      resorts: [],
    },
  });

  // Initialize the mutation hook
  const [adminRequest, { isLoading, isError, error }] =
    useAdminRequestMutation();

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      const response = await adminRequest(formData).unwrap();
      console.log("Submission successful:", response);
      // Optionally reset form or navigate to a success page
      setFormData({
        name: "",
        email: "",
        phone: "",
        requestDetails: {
          resorts: [],
        },
      });
      localStorage.removeItem("stepOneInputs");
      setStep(1); // Reset to step 1 or redirect as needed
    } catch (err) {
      console.error("Submission failed:", err);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
      {/* Stepper */}
      <div className="d-flex flex-row justify-content-center gap-3 align-items-center w-100 mb-4">
        {/* Step 1 */}
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

        {/* Step 2 */}
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

      {/* Form Steps */}
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

      {/* Optional: Display loading or error states */}
      {isLoading && <p>Submitting...</p>}
      {isError && <p>Error: {"Submission failed"}</p>}
    </>
  );
};

export default PartnerMultiForm;
