"use client";

import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMsg from "../error-msg";
import socialImg1 from "@/assets/img/inner-page/contact/soacial-1.png";
import socialImg2 from "@/assets/img/inner-page/contact/soacial-2.png";
import socialImg3 from "@/assets/img/inner-page/contact/soacial-3.png";
import { useRegisterMutation } from "@/redux/api/authApi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUpForm = () => {
  const router = useRouter();
  const [registerUser, { isLoading, isError, error }] = useRegisterMutation();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      const res = await registerUser({
        name: data.fullName,
        email: data.email,
        password: data.password,
      }).unwrap();
      console.log("Register success:", res);
      const proceedtopp = searchParams?.get("proceedtopp") || undefined;
      if (proceedtopp === "proceed") {
        router.push("/partner-program");
      }
      reset();
    } catch (err: any) {
      console.error("Register failed:", err);
      alert(err.data.message);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="row gx-30">
        <div className="col-12 mb-20">
          <div className="it-contact-input-box p-relative">
            <input
              type="text"
              placeholder="Full Name *"
              {...register("fullName")}
            />
            <ErrorMsg msg={errors.fullName?.message || ""} />
          </div>
        </div>
        <div className="col-12 mb-20">
          <div className="it-contact-input-box p-relative">
            <input type="text" placeholder="Phone *" {...register("phone")} />
            <ErrorMsg msg={errors.phone?.message || ""} />
          </div>
        </div>
        <div className="col-md-12 mb-20">
          <div className="it-contact-input-box p-relative">
            <input type="email" placeholder="Email *" {...register("email")} />
            <ErrorMsg msg={errors.email?.message || ""} />
          </div>
        </div>
        <div className="col-md-12 mb-30">
          <div className="it-contact-input-box p-relative">
            <input
              type="password"
              placeholder="Password *"
              {...register("password")}
            />
            <ErrorMsg msg={errors.password?.message || ""} />
          </div>
        </div>
      </div>

      <div className="it-sign-up-button-box d-sm-flex align-items-center justify-content-between mb-35">
        <button className="it-btn-primary" type="submit" disabled={isLoading}>
          <span>{isLoading ? "Signing up..." : "Sign UP"}</span>
        </button>
        <div className="it-sign-up-social">
          <span>or sign up with</span>
          <a href="#">
            <Image src={socialImg1} alt="Social Img" width={35} height={35} />
          </a>
          <a href="#">
            <Image src={socialImg2} alt="Social Img" width={35} height={35} />
          </a>
          <a href="#">
            <Image src={socialImg3} alt="Social Img" width={35} height={35} />
          </a>
        </div>
      </div>

      <div className="it-sign-up-bottom">
        <span>
          Already have an account? <Link href="/sign-in">Sign In</Link>
        </span>
      </div>

      {isError && (
        <p className="text-danger mt-2">
          {(error as any)?.data?.message || "Registration failed"}
        </p>
      )}
    </form>
  );
};

export default SignUpForm;
