import BookingCheckoutArea from "@/components/booking/booking-checkout-area";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const BookingCheckoutMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Booking Checkout" subtitle="Tour" />

        <BookingCheckoutArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default BookingCheckoutMain;
