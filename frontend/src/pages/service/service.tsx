import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import GalleryArea from "@/components/gallery/gallery-area";
import ServiceArea from "@/components/service/ServiceArea";

import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const ServiceMain = () => {
  return (
    <Wrapper scrollBackToTop={false}>
      <HeaderTwo />
      <main>
        <Breadcrumb title="service" />

        <ServiceArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default ServiceMain;
