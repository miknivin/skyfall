import { IResort } from "@/types/resort";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetAllResortsResponse {
  message: string;
  data: IResort[];
}

interface ErrorResponse {
  message: string;
}

interface GetResortByIdResponse {
  message: string;
  data: IResort;
}

export const resortApi = createApi({
  reducerPath: "resortApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  }),
  endpoints: (builder) => ({
    getAllResorts: builder.query<GetAllResortsResponse, void>({
      query: () => ({
        url: "/resorts",
        method: "GET",
      }),
    }),
    getResortById: builder.query<GetResortByIdResponse, string>({
      query: (id) => ({
        url: `/resorts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// ✅ Correct export
export const { useGetAllResortsQuery, useGetResortByIdQuery } = resortApi;
