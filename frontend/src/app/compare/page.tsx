import { Metadata } from "next";
import CompareMain from "@/pages/compare/compare";

export const metadata: Metadata = {
  title: "Skyfall - Compare Page",
};

const ComparePage = () => {
  return <CompareMain />;
};

export default ComparePage;
