import MyAccountPage from "@/components/dashboard/MyAccountPage";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import Wrapper from "@/layouts/wrapper";

export default function page() {
  return (
    <>
      <Wrapper>
        <HeaderOne hasTopBar />
        <main>
          <MyAccountPage />
        </main>
        <FooterOne />
      </Wrapper>
    </>
  );
}
