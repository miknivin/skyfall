"use client";

import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IResort } from "@/types/resort";
import { MinusSvg, PlusSvg } from "@/components/svg";

interface IProps {
  resort: IResort;
}

const DetailsSidebar = ({ resort }: IProps) => {
  const minPrice =
    resort.rooms.length > 0
      ? Math.min(...resort.rooms.map((room) => room.pricePerNight))
      : 0;

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState<number>(1); // Default to 1 adult
  const [children, setChildren] = useState<number>(0); // Default to 0 children

  return (
    <div className="it-discover-right">
      <div className="it-discover-package mb-60">
        <div className="it-discover-package-item">
          <h3 className="it-discover-package-title">Book This Resort</h3>
          <div className="it-discover-package-content">
            <form className="it-discover-package-form">
              <div className="it-discover-package-list d-flex flex-column mb-20">
                <span>Check-In Date</span>
                <div className="it-discover-package-box">
                  <DatePicker
                    selected={checkIn}
                    onChange={(date: Date | null) => setCheckIn(date)}
                    placeholderText="Select Check-In Date"
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    minDate={new Date()} // Prevent past dates
                  />
                </div>
              </div>
              <div className="it-discover-package-list d-flex flex-column  mb-20">
                <span>Check-Out Date</span>
                <div className="it-discover-package-box">
                  <DatePicker
                    selected={checkOut}
                    onChange={(date: Date | null) => setCheckOut(date)}
                    placeholderText="Select Check-Out Date"
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    minDate={checkIn || new Date()} // Prevent dates before check-in
                    disabled={!checkIn} // Disable until check-in is selected
                  />
                </div>
              </div>
              <div className="it-discover-passenger d-flex align-items-center justify-content-between">
                <h3 className="it-discover-passenger-categories">
                  Adult (18+ years)
                </h3>
                <div className="it-discover-passenger-quantity d-flex align-items-center">
                  <span
                    className="it-cart-minus"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                  >
                    <MinusSvg />
                  </span>
                  <input
                    className="it-cart-input"
                    type="text"
                    value={adults}
                    readOnly
                  />
                  <span
                    className="it-cart-plus"
                    onClick={() => setAdults(adults + 1)}
                  >
                    <PlusSvg />
                  </span>
                </div>
              </div>
              <div className="it-discover-passenger d-flex align-items-center justify-content-between">
                <h3 className="it-discover-passenger-categories">
                  Children (0-17)
                </h3>
                <div className="it-discover-passenger-quantity d-flex align-items-center">
                  <span
                    className="it-cart-minus"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    <MinusSvg />
                  </span>
                  <input
                    className="it-cart-input"
                    type="text"
                    value={children}
                    readOnly
                  />
                  <span
                    className="it-cart-plus"
                    onClick={() => setChildren(children + 1)}
                  >
                    <PlusSvg />
                  </span>
                </div>
              </div>
            </form>
            <div className="it-discover-package-total">
              <h3 className="it-discover-package-total-text mb-30">
                Starting Price: <span>₹{minPrice.toFixed(2)}</span> / per night
              </h3>
              <div className="it-discover-package-proceed">
                <Link href="/booking-page" className="it-btn-primary">
                  Proceed to Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-discover-info mb-60">
        <h3 className="it-discover-package-title">Resort Information</h3>
        <div className="it-discover-info-box">
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Max Guests</span>
              <h5>
                {resort.rooms.reduce((sum, room) => sum + room.capacity, 0)}
              </h5>
            </div>
          </div>
          <div className="it-discover-info-item d-flex align-items-center">
            <div className="it-discover-info-icon">
              <i className="fa-solid fa-bed"></i>
            </div>
            <div className="it-discover-info-text">
              <span className="it-discover-info-subtitle">Room Types</span>
              <h5>
                {resort.rooms.map((room) => room.roomType).join(", ") || "N/A"}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSidebar;
