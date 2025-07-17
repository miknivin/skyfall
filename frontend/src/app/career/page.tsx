import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";
import CareerMain from "@/pages/career/career";

export const metadata: Metadata = {
  title: "Skyfall - Career Page",
};

const ServicePage = () => {
  return <CareerMain />;
};

export default ServicePage;
