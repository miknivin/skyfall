import { Metadata } from "next";
import CheckoutMain from "@/pages/checkout/checkout";

export const metadata: Metadata = {
  title: "Skyfall - Checkout Page",
};

const CheckoutPage = () => {
  return <CheckoutMain />;
};

export default CheckoutPage;
