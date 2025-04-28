import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdminRequest } from "../../types/admin-request";

const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  }),
  endpoints: (builder) => ({
    adminRequest: builder.mutation({
      query: (body: AdminRequest) => ({
        url: "/admin/request",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAdminRequestMutation } = adminApi;
export default adminApi;
