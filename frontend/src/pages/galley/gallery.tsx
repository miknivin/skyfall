import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import GalleryArea from "@/components/gallery/gallery-area";

import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const GalleryMain = () => {
  return (
    <Wrapper scrollBackToTop={false}>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Gallery" />

        <GalleryArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default GalleryMain;
