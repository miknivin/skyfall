"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetMeQuery } from "@/redux/api/userApi";
import { useLazyLogoutQuery } from "@/redux/api/authApi";

export default function MyAccountPage() {
  const router = useRouter();
  const { data: user, isLoading } = useGetMeQuery();
  const [logout] = useLazyLogoutQuery();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [user, isLoading, router]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (isLoading || !user) return null;

  return (
    <div style={{ minHeight: "65vh" }} className="container my-5">
      <h2 className="mb-4">My Account</h2>
      <div className="row">
        {/* Personal Details */}
        <div
          className="col-md-4 mb-4"
          role="button"
          onClick={() => handleNavigation("/my-account/personal-details")}
        >
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Personal Details</h5>
              <p className="card-text">
                View and edit your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Bookings */}
        <div
          className="col-md-4 mb-4"
          role="button"
          onClick={() => handleNavigation("/my-account/bookings")}
        >
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Bookings</h5>
              <p className="card-text">
                Check your past and upcoming bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="col-md-4 mb-4" role="button" onClick={handleLogout}>
          <div className="card shadow-sm h-100 text-danger border-danger">
            <div className="card-body">
              <h5 className="card-title">Logout</h5>
              <p className="card-text">
                Click to securely log out of your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
