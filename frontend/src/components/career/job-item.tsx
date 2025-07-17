"use client";

import Link from "next/link";

// Helper function to format salary range, showing INR if it exists
type SalaryRange = {
  inr?: {
    min?: number;
    max?: number;
  };
};

const formatSalaryRange = (salaryRange: SalaryRange | undefined) => {
  if (!salaryRange) return ["N/A"];

  const inrMin = salaryRange.inr?.min;
  const inrMax = salaryRange.inr?.max;

  let result = [];

  // Add INR range if both min and max exist
  if (inrMin !== undefined && inrMax !== undefined) {
    result.push(
      `₹${inrMin.toLocaleString()} - ₹${inrMax.toLocaleString()}/month`
    );
  } else if (inrMin !== undefined) {
    result.push(`₹${inrMin.toLocaleString()}/month (min)`);
  }

  return result.length > 0 ? result : ["N/A"];
};

const JobItemFour = ({ job }: any) => {
  const salaryRanges = formatSalaryRange(job.salaryRange);

  return (
    <div>
      <Link
        href={`/job-details/${job._id}`}
        style={{ boxShadow: "0 4px 30px 0 rgba(0, 0, 0, 0.1)" }}
        className="it-events-item p-0 m-0 border-0"
      >
        <div className="it-events-content p-3  border rounded-3 border-1 border-black">
          <div className="it-events-meta mb-10 d-flex align-items-center">
            <div className="it-events-meta-icon mr-5">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <span className="it-events-meta-text">
              {job.jobLocation || "Location not specified"}
            </span>
          </div>
          <h3 className="it-events-title">{job.title}</h3>
          {salaryRanges.map((range, index) => (
            <span
              key={index}
              className="bg-success-subtle px-3 py-1 border rounded-3 mb-3 d-inline-block mr-2"
            >
              {range}
            </span>
          ))}
          <p style={{ marginRight: "0" }} className="job-description mt-3 mr-0">
            {job.jobDescription}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default JobItemFour;
