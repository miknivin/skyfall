import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import ShopDetailsArea from "@/components/shop/shop-details/shop-details-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";
import { IProductDT } from "@/types/product-d-t";

interface ShopDetailsProps {
  product: IProductDT;
}

const ShopDetailsMain = ({ product }: ShopDetailsProps) => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={product?.title} subtitle="Shop" />

        <ShopDetailsArea product={product} />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default ShopDetailsMain;
