"use client";

import Link from "next/link";
import { dummyJobs } from "@/data/dummyJobs";
import JobItemFour from "./job-item";

// Dummy job data for travel agency

const CareerArea = () => {
  return (
    <div className="it-featured-area it-featured-style-2 it-featured-style-3 pt-120 p-relative">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="it-featured-title-box mb-75 text-center">
              <h3 className="it-section-title">Top Opportunities</h3>
            </div>
          </div>
        </div>
        <div className="it-featured-item-wrap it-featured-style-3-space mb-30">
          <div className="row job-grid-gap py-2">
            {dummyJobs.length > 0 ? (
              dummyJobs.map((job) => (
                <div
                  key={job._id}
                  className="col-xl-4 col-lg-6 col-md-6 job-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <JobItemFour job={job} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No jobs available at the moment.</p>
              </div>
            )}
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="it-featured-action text-center">
            {dummyJobs.length > 0 && (
              <Link href="/jobs" className="it-btn-secondary">
                View All Jobs
              </Link>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CareerArea;
