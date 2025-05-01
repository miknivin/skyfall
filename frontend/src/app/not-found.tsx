import { Metadata } from "next";
import ErrorMain from "@/pages/error/error";

export const metadata: Metadata = {
  title: "Skyfall - Not Found Page",
};

export default function NotFound() {
  return <ErrorMain />;
}
