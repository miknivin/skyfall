import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { User } from "./../../types/user-i-t";
import { setIsAuthenticated, setUser } from "../features/authSlice";
import Cookies from "js-cookie";

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface GoogleSignInRequest {
  token: string;
}

interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

interface LogoutResponse {
  success: boolean;
  message: string;
}

// Define the authApi with TypeScript
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  }), // Update to Express URL later (e.g., process.env.NEXT_PUBLIC_API_URL)
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set("token", data.token, {
            expires: 7,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            httpOnly: true,
          });
          dispatch(setUser(data.user));
          dispatch(setIsAuthenticated(true));
          await dispatch(userApi.endpoints.getMe.initiate());
        } catch (error) {
          console.error("Register error:", error);
        }
      },
    }),
    googleSignIn: builder.mutation<AuthResponse, GoogleSignInRequest>({
      query: (body) => ({
        url: `/register/${process.env.NEXT_PUBLIC_PROJECT_ID || ""}`,
        method: "POST",
        body,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set("token", data.token, {
            expires: 7,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            httpOnly: true,
          });
          dispatch(setUser(data.user));
          dispatch(setIsAuthenticated(true));
          await dispatch(userApi.endpoints.getMe.initiate());
        } catch (error) {
          console.error("Google Sign-In error:", error);
        }
      },
    }),
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set("token", data.token, {
            expires: 7,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            httpOnly: true,
          });
          dispatch(setUser(data.user));
          dispatch(setIsAuthenticated(true));
          await dispatch(userApi.endpoints.getMe.initiate());
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),
    logout: builder.query<LogoutResponse, void>({
      query: () => "/logout",
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Optional: Reset user state
          dispatch(setUser(null));
          dispatch(setIsAuthenticated(false));
          dispatch(userApi.util.resetApiState()); // Clear userApi cache
        } catch (error) {
          console.error("Logout error:", error);
        }
      },
    }),
  }),
});

// Export typed hooks
export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyLogoutQuery,
  useGoogleSignInMutation,
} = authApi;
