import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ChooseEight from "@/components/choose/choose-eight";

import PortfolioArea from "@/components/portfolio/portfolio-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const PortfolioMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Portfolio" />

        <ChooseEight />

        <PortfolioArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default PortfolioMain;
