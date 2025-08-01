"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IDestinationDT } from "@/types/destination-d-t";
import ReviewBox from "./review-box";
import Sidebar from "./sidebar";
import AttractionItem from "./attraction-item";
import AdventureItem from "./adventure-item";
import discoverImg1 from "@/assets/img/inner-page/discover/discover-2.jpg";
import discoverImg2 from "@/assets/img/inner-page/discover/discover-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IProps {
  destination: any;
}

const DestinationDetailsArea = ({ destination }: IProps) => {
  return (
    <div className="it-discover-area pt-120 pb-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <h3 className="it-section-title mb-40" style={{ fontSize: "40px" }}>
              Explore the Beautiful Charm of {destination.name}
            </h3>
            <div className="it-discover-dsc mb-45">
              <p>{destination.details1}</p>
            </div>
            <div className="it-discover-thumb-wrap">
              <div className="row">
                <div className="col-12">
                  <div className="it-discover-thumb">
                    <div className="it-discover-thumb mb-30">
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="it-attraction-swiper"
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                        }}
                      >
                        {destination.attractions.map(
                          (attraction: any, index: number) => (
                            <SwiperSlide key={index}>
                              <AttractionItem attraction={attraction} />
                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-discover-dsc mb-45 mt-45">
              <p>{destination.details2}</p>
            </div>
            <div className="it-discover-thumb mb-30">
              <h3 className="it-section-title mb-20">Adventures</h3>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="it-adventure-swiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {destination.adventures.map((adventure: any, index: any) => (
                  <SwiperSlide key={index}>
                    <AdventureItem adventure={adventure} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <h3 className="it-discover-title mb-35">Location</h3> */}
            {/* <div className="it-discover-maps mb-35">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121914.86196405679!2d-74.07886878452959!3d40.72084424392851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713501285528!5m2!1sen!2sbd"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
            {/* <ReviewBox title={destination.title} /> */}
          </div>
          <div className="col-xl-4 col-lg-4">
            <Sidebar />
          </div>
        </div>
        <div className="it-pagination pb-100"></div>
      </div>
    </div>
  );
};

export default DestinationDetailsArea;
