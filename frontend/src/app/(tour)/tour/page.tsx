import { Metadata } from "next";
import TourMain from "@/pages/tour/tour";

export const metadata: Metadata = {
  title: "Skyfall - Tour Page",
};

const TourPage = () => {
  return <TourMain />;
};

export default TourPage;
