import { NextResponse } from "next/server";

export const catchAsyncErrors = (controllerFunction:any) => async (req:any) => {
    try {
      return await controllerFunction(req);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Server Error';
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }
  };