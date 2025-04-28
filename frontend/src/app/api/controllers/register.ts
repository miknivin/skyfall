import User from "@/models/User";
import { sendToken } from "../utils/sendToken";
import { catchAsyncErrors } from "../utils/catchAsyncErrors";
import { dbConnect } from "@/lib/db/dbConnect";
export const registerUser = catchAsyncErrors(async (req: any, res: any) => {
  const { name, email, password } = await req.json();
  await dbConnect();
  const user = await User.create({
    name,
    email,
    password,
  });

  return sendToken(user, 201);
});
