import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import TeamOne from "@/components/team/team-one";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const TeamMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <Breadcrumb title="Our Team Members" subtitle="Team" />

        <TeamOne />

        {/* <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" /> */}
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default TeamMain;
