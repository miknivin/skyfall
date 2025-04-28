import { Metadata } from 'next';
import ContactMain from '@/pages/contact/contact';

export const metadata: Metadata = {
  title: 'Travello - Contact  Page',
};

const ContactPage = () => {
  return <ContactMain />;
};

export default ContactPage;
