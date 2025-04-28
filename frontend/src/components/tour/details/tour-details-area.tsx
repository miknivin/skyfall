"use client";

import Image from "next/image";
import TourDetailsFaq from "@/components/tour/details/tour-details-faq";
import ReviewBox from "./review-box";
import DetailsSidebar from "./details-sidebar";
import { IResort } from "@/types/resort";
import {
  AirplaneSvg,
  CarSvg,
  FoodContainerSvg,
  SecurityShieldSvg,
  SettingsSvg,
  WiFiSvg,
  DollarSvg,
} from "@/components/svg";

interface TourDetailsProps {
  resort: IResort;
}

const TourDetailsArea = ({ resort }: TourDetailsProps) => {
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
                        <span>
                          <DollarSvg />
                        </span>
                      </div>
                      <div className="it-discover-cat-text">
                        <p>
                          From <br />
                          <span>${minPrice.toFixed(2)}</span>
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121914.86196405679!2d-74.07886878452959!3d40.72084424392851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713501285528!5m2!1sen!2sbd"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ReviewBox />
          </div>
          <div className="col-xl-4 col-lg-4">
            <DetailsSidebar resort={resort} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsArea;
