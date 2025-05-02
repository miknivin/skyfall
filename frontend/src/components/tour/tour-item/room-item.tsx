"use client";

import Image from "next/image";
import Link from "next/link";
import { IRoom } from "@/types/room";

interface RoomItemProps {
  room: IRoom;
  resortId: string;
}

const RoomItem = ({ room, resortId }: RoomItemProps) => {
  // Use the first image if available, otherwise fallback to a placeholder
  //   const imageSrc =
  //    room?.images && room.images?.length > 0
  //       ? room.images[0]
  //       : "https://ik.imagekit.io/c1jhxlxiy/placeholder.jpg?updatedAt=1745839682108";
  const imageSrc =
    "https://ik.imagekit.io/c1jhxlxiy/10836.jpg?updatedAt=1746187742113";
  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-thumb p-relative">
        <Image
          src={imageSrc}
          alt={room.roomType}
          width={370}
          height={250}
          style={{ height: "auto" }}
        />
      </div>
      <div className="it-featured-content">
        <div className="it-featured-meta mb-5">
          <span>
            <i className="fa-solid fa-users"></i> {room.capacity} Guests
          </span>
        </div>
        <h3 className="it-featured-title">
          <Link href={`/resort/${resortId}/room/${room.roomType}`}>
            {room.roomType}
          </Link>
        </h3>
        <div className="it-featured-price d-flex align-items-center">
          <i className="fa-solid fa-indian-rupee-sign" />
          <p>
            Price per Night: <span>₹{room.pricePerNight.toFixed(2)}</span>
          </p>
        </div>
        <div className="it-featured-meta mt-2">
          <span>
            <i className="fa-solid fa-hotel"></i> {room.roomCount}{" "}
            {room.roomCount === 1 ? "Room" : "Rooms"} Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
