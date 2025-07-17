import { Metadata } from "next";
import AboutMain from "@/pages/about/about";
import VmMain from "@/pages/about/vision-and-mission/vm";
import MessageMain from "@/pages/about/message-from-cmd/message";

export const metadata: Metadata = {
  title: "Skyfall - About Page",
};

const AboutPage = () => {
  return <MessageMain />;
};

export default AboutPage;
