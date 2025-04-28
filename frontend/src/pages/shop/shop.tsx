import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import ShopArea from "@/components/shop/shop-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const ShopMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Shop" />

        <ShopArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default ShopMain;
