import { Metadata } from "next";
import GalleryMain from "@/pages/galley/gallery";

export const metadata: Metadata = {
  title: "Skyfall - Gallery Page",
};

const GalleryPage = () => {
  return <GalleryMain />;
};

export default GalleryPage;
