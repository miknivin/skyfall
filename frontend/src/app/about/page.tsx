import { Metadata } from "next";
import AboutMain from "@/pages/about/about";

export const metadata: Metadata = {
  title: "Skyfall - About Page",
};

const AboutPage = () => {
  return <AboutMain />;
};

export default AboutPage;
