"use client";

import Image from "next/image";
import Link from "next/link";
import { IResort } from "@/types/resort";

interface TourItemProps {
  resort: IResort;
}

const TourItemOne = ({ resort }: TourItemProps) => {
  const minPrice = Math.min(...resort.rooms.map((room) => room.pricePerNight));

  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-thumb p-relative">
        <Image
          src="https://ik.imagekit.io/c1jhxlxiy/2419.jpg?updatedAt=1745839682108"
          alt={resort.name}
          width={370}
          height={250}
          style={{ height: "auto" }}
        />
      </div>
      <div className="it-featured-content">
        <div className="it-featured-meta mb-5">
          <a href="https://www.google.com/maps">
            <i className="fa-solid fa-location-dot"></i> {resort.location}
          </a>
        </div>
        <h3 className="it-featured-title">
          <Link href={`/tour-details/${resort._id?.toString()}`}>
            {resort.name}
          </Link>
        </h3>
        <div className="it-featured-price d-flex align-items-center">
          <i className="fa-regular fa-circle-dollar"></i>
          <p>
            From <span>₹{minPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourItemOne;
