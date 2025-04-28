import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import TestimonialArea from "@/components/testimonial/testimonial-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const TestimonialMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <Breadcrumb title="Testimonial" />

        <TestimonialArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default TestimonialMain;
