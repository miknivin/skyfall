"use client";

import { IResort } from "@/types/resort";
import { useGetAllResortsQuery } from "@/redux/api/resortApi";
import TourItemOne from "../tour/tour-item/tour-item-one";

const ServiceArea = () => {
  const { data, isLoading, isError, error } = useGetAllResortsQuery();
  const resorts: IResort[] = data?.data || [];

  return (
    <div className="it-gallery-area pt-150 pb-150">
      <div className="container">
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
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="it-gallery-item">
                  <TourItemOne resort={resort} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
