import { Metadata } from "next";
import TourDetailsMain from "@/pages/tour-details/tour-details";

export const metadata: Metadata = {
  title: "Travello - Resort Details Page",
};

export default function TourDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <TourDetailsMain id={params.id} />;
}
