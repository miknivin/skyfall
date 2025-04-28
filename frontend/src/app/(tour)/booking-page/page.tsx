import { Metadata } from 'next';
import BookingPageMain from '@/pages/booking-page/booking-page';

export const metadata: Metadata = {
  title: 'Travello - Booking Page',
};

const BookingPage = () => {
  return <BookingPageMain />;
};

export default BookingPage;
