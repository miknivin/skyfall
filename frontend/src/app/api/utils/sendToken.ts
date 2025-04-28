import { NextResponse } from "next/server";
interface RegisterResponse {
  token: string;
}
export const sendToken = (
  user: any,
  statusCode: number
): NextResponse<RegisterResponse> => {
  // Create JWT token
  const token = user.getJwtToken();
  // Options for cookies
  const options = {
    expires: new Date(
      Date.now() +
        (Number(process.env.COOKIE_EXPIRES_TIME) || 7) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  const response = NextResponse.json({ token }, { status: statusCode });
  response.cookies.set("token", token, options);
  return response;
};
