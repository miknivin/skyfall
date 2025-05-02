"use client";

import Image from "next/image";
import TourDetailsFaq from "@/components/tour/details/tour-details-faq";
import ReviewBox from "./review-box";
import DetailsSidebar from "./details-sidebar";
import { IEventSpace, IResort, IRoom } from "@/types/resort";
import {
  AirplaneSvg,
  CarSvg,
  FoodContainerSvg,
  SecurityShieldSvg,
  SettingsSvg,
  WiFiSvg,
  DollarSvg,
} from "@/components/svg";
import { useGetResortByIdQuery } from "@/redux/api/resortApi";
import RoomItem from "../tour-item/room-item";
import EventSpaceItem from "../tour-item/eventSpace-item";

interface TourDetailsProps {
  id: string;
}

const TourDetailsArea = ({ id }: TourDetailsProps) => {
  const { data, isLoading, isError, error } = useGetResortByIdQuery(id);
  const resort: IResort | undefined = data?.data;

  if (isLoading) {
    return (
      <div className="it-discover-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="text-center pt-100">Loading...</div>
        </div>
      </div>
    );
  }

  if (isError || !resort) {
    return (
      <div className="it-discover-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="text-center pt-100">
            {isError
              ? `Error: ${
                  (error as any)?.data?.message || "Failed to fetch resort"
                }`
              : `Resort not found with id: ${id}`}
          </div>
        </div>
      </div>
    );
  }

  const minPrice =
    resort.rooms.length > 0
      ? Math.min(...resort.rooms.map((room) => room.pricePerNight))
      : 0;

  return (
    <div className="it-discover-area pt-120 pb-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="it-descover-meta-box mb-30">
              <div className="it-discover-meta d-flex align-items-center">
                <span className="it-discover-meta-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                {resort.location}
              </div>
            </div>
            <h3 className="it-section-title mb-40">{resort.name}</h3>
            <div className="it-discover-cat-wrap mb-35">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="it-discover-cat-wrap d-flex align-items-center">
                    <div className="it-discover-cat-item d-flex">
                      <div className="it-discover-cat-icon">
                        <span
                          style={{ border: "2px solid" }}
                          className="d-flex justify-content-center p-2 rounded-circle align-items-center"
                        >
                          <i className="fa-solid fa-indian-rupee-sign"></i>
                        </span>
                      </div>
                      <div className="it-discover-cat-text">
                        <p>
                          From <br />
                          <span>₹{minPrice.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="it-discover-cat-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-share"></i> Share
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-sharp fa-solid fa-heart"></i>{" "}
                          WISHLIST
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-discover-thumb mb-30">
              <Image
                src="https://ik.imagekit.io/c1jhxlxiy/2419.jpg?updatedAt=1745839682108"
                alt={resort.name}
                width={770}
                height={451}
                style={{ height: "auto" }}
              />
            </div>
            <div className="it-discover-dsc mb-45">
              <h3 className="it-discover-title">Resort Overview</h3>
              <p>{resort.description || "No description available."}</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <DetailsSidebar resort={resort} />
          </div>
          <div>
            {/* before col-8  */}
            <h3 className="it-discover-title mb-25">Resort Amenities</h3>
            <div className="it-discover-tour-box mb-30">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <WiFiSvg />
                    </span>
                    Wi-Fi
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <FoodContainerSvg />
                    </span>
                    Dining
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <SettingsSvg />
                    </span>
                    Room Service
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <SecurityShieldSvg />
                    </span>
                    Security
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <CarSvg />
                    </span>
                    Parking
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <AirplaneSvg />
                    </span>
                    Airport Shuttle
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="it-discover-title mb-25">Included/Exclude</h3>
            <div className="it-discover-included">
              <div className="row">
                <div className="col-xl-7">
                  <div className="it-discover-included-content mb-40">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Room Accommodation
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Daily Breakfast
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Wi-Fi Access
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="it-discover-included-content mb-40">
                    <ul>
                      <li className="it-discover-exclude">
                        <i className="fa-regular fa-x"></i>
                        Additional Meals
                      </li>
                      <li className="it-discover-exclude">
                        <i className="fa-regular fa-x"></i>
                        Airport Transfers
                      </li>
                      <li className="it-discover-exclude">
                        <i className="fa-regular fa-x"></i>
                        Spa Services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <h3 className="it-discover-title mb-25">Availability</h3>
            <div className="it-discover-acordian mb-30">
              <TourDetailsFaq />
            </div> */}
            <h3 className="it-discover-title mb-35">Location</h3>
            <div className="it-discover-maps mb-35">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  resort.location
                )}&output=embed`}
                style={{ border: "0", width: "100%", height: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="row g-4">
              <div className="it-featured-title-box text-center">
                <h3 className="it-section-title">Rooms</h3>
              </div>
              {resort?.rooms?.map((room: IRoom) => (
                <div
                  key={`${room.roomType}-${room._id || room.roomType}`}
                  className="col-12 col-md-6 col-xl-4"
                >
                  <RoomItem room={room} resortId={id} />
                </div>
              ))}
            </div>
            {/* events */}
            <div>
              <div className="row g-4">
                <div className="it-featured-title-box text-center">
                  <h3 className="it-section-title">Events</h3>
                </div>
                {resort?.eventSpaces?.map((eventSpace: IEventSpace) => (
                  <div
                    key={`${eventSpace.name}-${
                      eventSpace?._id || eventSpace.name
                    }`}
                    className="col-12 col-md-6 col-xl-4"
                  >
                    <EventSpaceItem eventSpace={eventSpace} resortId={id} />
                  </div>
                ))}
              </div>
              <ReviewBox resortName={resort.name} />
            </div>
            <ReviewBox resortName={resort.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsArea;
