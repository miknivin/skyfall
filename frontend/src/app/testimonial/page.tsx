import { Metadata } from 'next';
import TestimonialMain from '@/pages/testimonial/testimonial';

export const metadata: Metadata = {
  title: 'Travello - Testimonial Page',
};

const TestimonialPage = () => {
  return <TestimonialMain />;
};

export default TestimonialPage;
