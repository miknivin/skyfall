import { Metadata } from 'next';
import { destinationData } from '@/data/destination-data';
import DestinationDetailsMain from '@/pages/destination-details/destination-details';

export const metadata: Metadata = {
  title: 'Travello - Destination Details Page',
};

export default function destinationDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const destination = destinationData.find(
    (destination) => destination.id === Number(params.id)
  );
  return destination ? (
    <DestinationDetailsMain destination={destination} />
  ) : (
    <div className="text-center pt-100">
      destination not found with id: {params.id}
    </div>
  );
}
