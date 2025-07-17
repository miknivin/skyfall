import AboutFour from "@/components/about/about-four";
import AboutOne from "@/components/about/about-one";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ChooseSeven from "@/components/choose/choose-seven";
import TeamTwo from "@/components/team/team-two";
import TestimonialFive from "@/components/testimonial/testimonial-five";
import TourFive from "@/components/tour/tour-five";
import VideoTwo from "@/components/video/video-two";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const VmMain = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <Breadcrumb title="ABout us" subtitle="About" />

        <Mission />
        <Vision />

        <TestimonialFive />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default VmMain;
