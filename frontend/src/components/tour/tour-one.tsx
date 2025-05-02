"use client";

import Image from "next/image";
import TourItemOne from "./tour-item/tour-item-one";

import { IResort } from "@/types/resort";
import shapeImg1 from "@/assets/img/home-1/featured/shape/sunGlass.png";
import shapeImg2 from "@/assets/img/home-1/featured/shape/bag.png";
import { useGetAllResortsQuery } from "@/redux/api/resortApi";

const TourOne = () => {
  const { data, isLoading, isError, error } = useGetAllResortsQuery();
  const resorts: IResort[] = data?.data || [];

  return (
    <div className="it-featured-area pt-120 pb-120 p-relative">
      <div className="it-featured-shape-box">
        <div className="it-featured-shape-1">
          <Image
            src={shapeImg1}
            alt="Shape Img"
            width={103}
            height={152}
            style={{ height: "auto" }}
          />
        </div>
        <div className="it-featured-shape-2">
          <Image
            src={shapeImg2}
            alt="Shape Img"
            width={138}
            height={123}
            style={{ height: "auto" }}
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="it-featured-title-box mb-75 text-center">
                <span className="it-section-subtitle">Featured</span>
                <h3 className="it-section-title">Resorts</h3>
              </div>
            </div>
          </div>
          <div className="it-featured-item-wrap">
            <div className="row">
              {isLoading ? (
                <div className="col-12 text-center">Loading...</div>
              ) : isError ? (
                <div className="col-12 text-center">
                  Error:{" "}
                  {(error as any)?.data?.message || "Failed to fetch resorts"}
                </div>
              ) : (
                resorts.map((resort) => (
                  <div
                    key={resort._id?.toString()}
                    className="col-xl-4 col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <TourItemOne resort={resort} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourOne;
