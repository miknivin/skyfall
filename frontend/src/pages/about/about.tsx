import AboutFour from '@/components/about/about-four';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import ChooseSeven from '@/components/choose/choose-seven';
import TestimonialFive from '@/components/testimonial/testimonial-five';
import TourFive from '@/components/tour/tour-five';
import VideoTwo from '@/components/video/video-two';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const AboutMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="ABout us" subtitle="About" />

        <AboutFour />

        <VideoTwo />

        <TourFive />

        <TestimonialFive />

        <ChooseSeven />

      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default AboutMain;
