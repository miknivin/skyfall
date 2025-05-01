import { Metadata } from "next";
import EventGridMain from "@/pages/event/event-grid";

export const metadata: Metadata = {
  title: "Skyfall - Event Page",
};

const EventGridPage = () => {
  return <EventGridMain />;
};

export default EventGridPage;
