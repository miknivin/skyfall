import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import TeamThree from "@/components/team/team-three";
import TeamTwo from "@/components/team/team-two";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const TeamTwoMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />

      <main>
        <Breadcrumb title="Team Carousel" subtitle="Team" />

        <TeamTwo />
        <TeamThree />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default TeamTwoMain;
