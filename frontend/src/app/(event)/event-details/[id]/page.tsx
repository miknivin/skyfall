import { Metadata } from 'next';
import { eventData } from '@/data/event-data';
import EventDetailsMain from '@/pages/event-details/event-details';

export const metadata: Metadata = {
  title: 'Travello - Event Details Page',
};

export default function EventDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const event = eventData.find((event) => event.id === Number(params.id));
  return event ? (
    <EventDetailsMain event={event} />
  ) : (
    <div className="text-center pt-100">
      event not found with id: {params.id}
    </div>
  );
}
