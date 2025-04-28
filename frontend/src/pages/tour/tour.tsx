import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import TourArea from "@/components/tour/tour-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const TourMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <Breadcrumb title="Tour Grid" subtitle="Tour" />

        <TourArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default TourMain;
