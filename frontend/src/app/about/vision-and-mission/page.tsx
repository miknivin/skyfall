import { Metadata } from "next";
import AboutMain from "@/pages/about/about";
import VmMain from "@/pages/about/vision-and-mission/vm";

export const metadata: Metadata = {
  title: "Skyfall - About Page",
};

const AboutPage = () => {
  return <VmMain />;
};

export default AboutPage;
