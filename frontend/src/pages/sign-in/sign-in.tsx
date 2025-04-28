import Breadcrumb from "@/components/breadcrumb/breadcrumb";

import SignInArea from "@/components/sign-in/sign-in-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

const SignInMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        {/* <Breadcrumb title="Sign In" /> */}

        <SignInArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default SignInMain;
