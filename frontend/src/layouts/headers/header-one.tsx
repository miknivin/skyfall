"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { useGetMeQuery } from "@/redux/api/userApi";
import {
  setUser,
  setIsAuthenticated,
  setLoading,
} from "@/redux/features/authSlice"; // Adjust path
import MenuItems from "./menu-items";
import OffCanvas from "@/components/offcanvas/offcanvas";
import HeaderTop from "./header-top";
import HeaderTopTwo from "./header-top-two";
import { CartSvg, UserSvg } from "@/components/svg";
import SignIn from "@/components/modals/SignIn";
import SignUp from "@/components/modals/SignUp";
import Logo from "@/assets/img/logo/logo.png";

interface HeaderProps {
  hasTopBar?: boolean;
  hasTopBarTwo?: boolean;
  headerClass?: string;
}

const HeaderOne = ({ hasTopBar, hasTopBarTwo, headerClass }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.user
  );
  console.log(user, "isAiy");

  const dispatch = useDispatch();
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetMeQuery(undefined, {
    // skip: isAuthenticated === false,
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Sync useGetMeQuery with Redux store
  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else if (userData) {
      dispatch(setUser(userData));
      dispatch(setIsAuthenticated(true));
      dispatch(setLoading(false));
    } else if (isError) {
      dispatch(setUser(null));
      dispatch(setIsAuthenticated(false));
      dispatch(setLoading(false));
    }
  }, [userData, isLoading, isError, dispatch]);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleSignInClick = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setIsAuthenticated(false));
    console.log("User logged out");
    // Optionally call an API to invalidate session
    router.push("/"); // Redirect to home
  };

  const handleSignUpClick = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  const handleClick = () => {
    if (isAuthenticated && user?.role === "user") {
      router.push("/partner-program");
    } else {
      const newSearchParams = new URLSearchParams(searchParams || undefined);
      newSearchParams.set("proceedtopp", "proceed");

      const newUrl = `${pathname}?${newSearchParams.toString()}`;

      router.push(newUrl);
      handleSignInClick();
    }
  };

  return (
    <>
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />

      <header>
        {hasTopBar && <HeaderTop />}
        {hasTopBarTwo && <HeaderTopTwo />}

        <div
          className={
            isVisible
              ? `${
                  headerClass ? headerClass : "it-header-bottom-area"
                } header-sticky`
              : `${headerClass ? headerClass : "it-header-bottom-area"}`
          }
        >
          <div className="container">
            <div className="it-header-bottom it-header-mob-space">
              <div className="row align-items-center py-2">
                <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div className="it-main-logo">
                    <Link href="/">
                      <Image src={Logo} alt="Skyfall" width={129} height={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 d-none d-xl-block">
                  {/* <div className="it-main-menu text-center">
                    <nav className="it-menu-content">
                      <MenuItems />
                    </nav>
                  </div> */}
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-6">
                  <div className="it-header-bottom-right d-flex align-items-center justify-content-end">
                    <div className="it-header-bottom-right-shop d-none d-md-block">
                      <Link href="/cart">
                        <span>
                          <CartSvg />
                        </span>
                      </Link>
                    </div>
                    <div
                      style={{ marginRight: "15px" }}
                      className="d-none d-md-block"
                    >
                      {isAuthenticated ? (
                        <div className="dropdown">
                          <a
                            href="#"
                            className="d-flex align-items-center text-decoration-none dropdown-toggle"
                            id="userDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span style={{ color: "black" }}>
                              <UserSvg />
                            </span>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="userDropdown"
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/my-account"
                              >
                                My Account
                              </Link>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={handleLogout}
                              >
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <a href="#" onClick={handleSignInClick}>
                          <span>
                            <UserSvg />
                          </span>
                        </a>
                      )}
                    </div>
                    <div className="it-header-bottom-right-button ml-5">
                      {isLoading ? (
                        <div
                          className="spinner-border text-secondary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : isAuthenticated && user?.role === "admin" ? (
                        <button
                          onClick={() =>
                            (window.location.href =
                              "https://skyfall-admin.onrender.com")
                          }
                          className="it-btn-primary"
                        >
                          Dashboard
                        </button>
                      ) : (
                        <button
                          onClick={handleClick}
                          className="it-btn-primary"
                        >
                          Become a partner
                        </button>
                      )}
                    </div>
                    <div className="it-header-bar-wrap d-xl-none">
                      <button
                        className="it-header-bar it-menu-bar"
                        onClick={() => setIsOffCanvasOpen(true)}
                      >
                        <i className="fa-sharp fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SignIn
        isOpen={isSignInOpen}
        onClose={handleSignInClose}
        onSignUpClick={handleSignUpClick}
      />
      <SignUp
        isOpen={isSignUpOpen}
        onClose={handleSignUpClose}
        onSignInClick={handleSignInClick}
      />
    </>
  );
};

export default HeaderOne;
