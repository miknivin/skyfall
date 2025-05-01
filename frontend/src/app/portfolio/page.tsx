import { Metadata } from "next";
import PortfolioMain from "@/pages/portfolio/portfolio";

export const metadata: Metadata = {
  title: "Skyfall - Portfolio Page",
};

const PortfolioPage = () => {
  return <PortfolioMain />;
};

export default PortfolioPage;
