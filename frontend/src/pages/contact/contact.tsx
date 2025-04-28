import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import ContactArea from '@/components/contact/contact-area';
import MapArea from '@/components/contact/map-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const ContactMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Contact Us" subtitle="Contact" />

        <ContactArea />

        <MapArea />

      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default ContactMain;
