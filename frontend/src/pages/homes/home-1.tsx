import AboutOne from "@/components/about/about-one";
import DestinationOne from "@/components/destination/destination-one";
import TourOne from "@/components/tour/tour-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import Wrapper from "@/layouts/wrapper";
import FunFactOne from "@/components/funfact/funfact-one";
import ChooseOne from "@/components/choose/choose-one";
import OfferOne from "@/components/offer/offer-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import BlogOne from "@/components/blog/blog-one";
import FooterOne from "@/layouts/footers/footer-one";
import ShopOne from "@/components/shop/shop-one";
import HeaderOne from "@/layouts/headers/header-one";

const HomeMain = () => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />

      <main>
        <HeroBannerOne />

        {/* <DestinationOne />

        <AboutOne /> */}

        <TourOne />

        <FunFactOne />

        {/* <ChooseOne /> */}

        <OfferOne />

        <TestimonialOne />

        {/* <ShopOne /> */}

        <BlogOne />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default HomeMain;
