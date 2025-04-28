import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import EventGridArea from '@/components/event/event-grid-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const EventGridMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Event Grid" subtitle="Event" />\
        <EventGridArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default EventGridMain;
