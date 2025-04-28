import BookingArea from "@/components/booking/booking-area";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const BookingPageMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Booking Page" subtitle="Tour" />

        <BookingArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default BookingPageMain;
