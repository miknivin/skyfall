"use client";
import Link from "next/link";
import SignInForm from "../form/sign-in-form";

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUpClick: () => void;
}

export default function SignIn({
  isOpen,
  onClose,
  onSignUpClick,
}: SignInProps) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-between">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Sign in
              </h5>
              <button
                type="button"
                className="close fs-2"
                onClick={handleClose}
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <SignInForm />
            </div>
            <div className="modal-footer">
              <div className="it-sign-up-bottom">
                <span>
                  Don't have an account?{" "}
                  <button className="text-success" onClick={onSignUpClick}>
                    Sign Up
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
