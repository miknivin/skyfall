import { Metadata } from "next";
import { destinationData } from "@/data/destination-data";
import DestinationDetailsMain from "@/pages/destination-details/destination-details";
import { districts } from "@/data/locations";

export const metadata: Metadata = {
  title: "Skyfall - Destination Details Page",
};

export default function destinationDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const destination = districts.find(
    (destination) => destination.id === params.id
  );
  return destination ? (
    <DestinationDetailsMain destination={destination} />
  ) : (
    <div className="text-center pt-100">
      destination not found with id: {params.id}
    </div>
  );
}
