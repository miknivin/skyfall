import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import SignUpArea from "@/components/sign-up/sign-up-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const SignUpMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Sign Up" />

        <SignUpArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default SignUpMain;
