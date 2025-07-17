import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import OverView from "@/components/choose/overview";
import TeamTwo from "@/components/team/team-two";
import TestimonialFive from "@/components/testimonial/testimonial-five";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import Wrapper from "@/layouts/wrapper";

const OverviewMain = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <Breadcrumb title="Overview" subtitle="About" />
        <OverView />
        <TeamTwo />
        <TestimonialFive />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default OverviewMain;
