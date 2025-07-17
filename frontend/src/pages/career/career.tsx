import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import CareerArea from "@/components/career/career-area";
import GalleryArea from "@/components/gallery/gallery-area";
import ServiceArea from "@/components/service/ServiceArea";

import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const CareerMain = () => {
  return (
    <Wrapper scrollBackToTop={false}>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Career" />

        <CareerArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default CareerMain;
