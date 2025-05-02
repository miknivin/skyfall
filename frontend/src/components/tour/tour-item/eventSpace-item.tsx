"use client";

import Image from "next/image";
import Link from "next/link";
import { IEventSpace } from "@/types/resort";

interface EventSpaceItemProps {
  eventSpace: IEventSpace;
  resortId: string;
}

const EventSpaceItem = ({ eventSpace, resortId }: EventSpaceItemProps) => {
  const imageSrc =
    "https://ik.imagekit.io/c1jhxlxiy/1773.jpg?updatedAt=1746212260998";

  const isAvailable =
    eventSpace.availability?.some(
      (avail: any) =>
        new Date(avail.date) >= new Date() && avail.status === "available"
    ) ?? true;

  const truncatedDescription = eventSpace.description
    ? eventSpace.description.length > 100
      ? `${eventSpace.description.slice(0, 100)}...`
      : eventSpace.description
    : null;

  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-thumb p-relative">
        <Image
          src={imageSrc}
          alt={eventSpace.name}
          width={370}
          height={250}
          style={{ height: "auto" }}
        />
      </div>
      <div className="it-featured-content">
        <div className="it-featured-meta mb-5">
          <span>
            <i className="fa-solid fa-users"></i> {eventSpace.capacity} Guests •{" "}
            {eventSpace.type}
          </span>
        </div>
        <h3 className="it-featured-title">
          <Link href={`/resort/${resortId}/event-space/${eventSpace.name}`}>
            {eventSpace.name}
          </Link>
        </h3>
        <div className="it-featured-price d-flex align-items-center">
          <i className="fa-solid fa-indian-rupee-sign" />
          <p>
            Price per Event: <span>₹{eventSpace.pricePerEvent.toFixed(2)}</span>
          </p>
        </div>
        <div className="it-featured-meta mt-2">
          <span>
            <i className="fa-solid fa-check-circle"></i>{" "}
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </div>
        {truncatedDescription && (
          <div className="it-featured-meta mt-2">
            <span>
              <i className="fa-solid fa-info-circle"></i> {truncatedDescription}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSpaceItem;
