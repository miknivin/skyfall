"use client";

import ErrorMsg from "@/components/error-msg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AdminRequest } from "@/types/admin-request";
import { useEffect } from "react";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Phone must be only digits"),
});

interface StepOneProps {
  formData: AdminRequest;
  setFormData: React.Dispatch<React.SetStateAction<AdminRequest>>;
  handleNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({
  formData,
  setFormData,
  handleNext,
}) => {
  // Load initial values from localStorage or fallback to empty strings
  const getInitialValues = () => {
    const savedData = JSON.parse(localStorage.getItem("stepOneInputs") || "{}");
    return {
      firstName: savedData.firstName || "",
      lastName: savedData.lastName || "",
      email: savedData.email || "",
      phone: savedData.phone || "",
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: getInitialValues(),
  });

  // Watch all form fields for changes
  const formValues = watch();

  // Save input values to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("stepOneInputs", JSON.stringify(formValues));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }
  }, [formValues]);

  const onSubmit = (data: any) => {
    const fullName = `${data.firstName} ${data.lastName}`.trim();
    setFormData((prev: any) => ({
      ...prev,
      name: fullName,
      email: data.email,
      phone: data.phone,
    }));
    handleNext();
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Step 1: Basic Details</h2>
      <div className="row gx-20">
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              {...register("firstName")}
            />
            <ErrorMsg
              msg={
                typeof errors.firstName?.message === "string"
                  ? errors.firstName.message
                  : ""
              }
            />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              {...register("lastName")}
            />
            <ErrorMsg
              msg={
                typeof errors.lastName?.message === "string"
                  ? errors.lastName.message
                  : ""
              }
            />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              {...register("email")}
            />
            <ErrorMsg
              msg={
                typeof errors.email?.message === "string"
                  ? errors.email.message
                  : ""
              }
            />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="text"
              placeholder="Phone"
              {...register("phone")}
            />
            <ErrorMsg
              msg={
                typeof errors.phone?.message === "string"
                  ? errors.phone.message
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <button type="submit" className="it-btn-primary">
        Next Step
      </button>
    </form>
  );
};

export default StepOne;
