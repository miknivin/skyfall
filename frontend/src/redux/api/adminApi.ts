import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdminRequest } from "../../types/admin-request";

const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    adminRequest: builder.mutation({
      query: (body: AdminRequest) => ({
        url: "/admin/request",
        method: "POST",
        body,
      }),
    }),
    generateUploadPresignedUrl: builder.mutation({
      query: (body: {
        userId: string;
        fileType: "document" | "image";
        fileName: string;
        category?: string;
        adminRequestId?: string;
      }) => ({
        url: "/admin/request/pre-signedurl",
        method: "POST",
        body,
      }),
    }),
    generateViewPresignedUrl: builder.mutation({
      query: (body) => ({
        url: "/admin/request/pre-signedurl-view",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useAdminRequestMutation,
  useGenerateUploadPresignedUrlMutation,
  useGenerateViewPresignedUrlMutation,
} = adminApi;
export default adminApi;
