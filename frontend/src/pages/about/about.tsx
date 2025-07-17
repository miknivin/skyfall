import AboutFour from "@/components/about/about-four";
import AboutOne from "@/components/about/about-one";
import Message from "@/components/about/Message";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ChooseSeven from "@/components/choose/choose-seven";
import OverView from "@/components/choose/overview";
import TeamTwo from "@/components/team/team-two";
import TestimonialFive from "@/components/testimonial/testimonial-five";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import Wrapper from "@/layouts/wrapper";

const AboutMain = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <Breadcrumb title="ABout us" subtitle="About" />
        <Vision />
        <Mission />
        <Message />
        <TeamTwo />
        <TestimonialFive />
        <OverView />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default AboutMain;
