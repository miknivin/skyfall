import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import EventDetailsArea from "@/components/event/event-details/event-details-area";

import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";
import { IEventDT } from "@/types/event-d-t";

interface EventDetailsProps {
  event: IEventDT;
}

const EventDetailsMain = ({ event }: EventDetailsProps) => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={event?.title} subtitle="Event" />

        <EventDetailsArea event={event} />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default EventDetailsMain;
