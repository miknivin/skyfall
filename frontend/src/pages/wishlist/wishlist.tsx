import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import WishlistArea from "@/components/wishlist/wishlist-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const WishlistMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Wishlist" />

        <WishlistArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default WishlistMain;
