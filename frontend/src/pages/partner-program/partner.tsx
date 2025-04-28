import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ContactArea from "@/components/contact/contact-area";
import MapArea from "@/components/contact/map-area";
import PartnerArea from "@/components/partner-program/PartnerFormArea";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const PartnerMain = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <Breadcrumb title="Partner program" subtitle="Partner Program" />

        <PartnerArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default PartnerMain;
