import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import CheckoutArea from '@/components/checkout/checkout-area';
import CouponArea from '@/components/checkout/coupon-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const CheckoutMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Checkout" />

        <CouponArea />

        <CheckoutArea />

      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default CheckoutMain;
