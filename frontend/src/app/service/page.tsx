import { Metadata } from "next";
import GalleryMain from "@/pages/galley/gallery";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Skyfall - Service Page",
};

const ServicePage = () => {
  return <ServiceMain />;
};

export default ServicePage;
