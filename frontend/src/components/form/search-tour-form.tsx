'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = () => {
  const router = useRouter();

  const [location, setLocation] = useState<string>('');
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/destination');
  };

  return (
    <form
      onSubmit={handleSearch}
      className="it-tour-package-wrap it-slider-tour-style it-tour-package-box z-index"
    >
      <div className="it-tour-package-location__wrapper">
        <div className="row">
          {/* Location Field */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="it-tour-package-item d-flex">
              <div className="it-tour-package-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="it-tour-package-text">
                <h3 className="it-tour-package-title">Location</h3>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where are you going?"
                />
              </div>
            </div>
          </div>

          {/* Check-In Date Field */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="it-tour-package-item d-flex">
              <div className="it-tour-package-icon">
                <i className="fa-light fa-calendar"></i>
              </div>
              <div className="it-tour-package-text">
                <h3 className="it-tour-package-title">Check In</h3>
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  placeholderText="Check In"
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          {/* Check-Out Date Field */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="it-tour-package-item d-flex">
              <div className="it-tour-package-icon">
                <i className="fa-light fa-calendar"></i>
              </div>
              <div className="it-tour-package-text">
                <h3 className="it-tour-package-title">Check Out</h3>
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  placeholderText="Check Out"
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          {/* Guests Field */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="it-tour-package-item d-flex">
              <div className="it-tour-package-icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="it-tour-package-text">
                <h3 className="it-tour-package-title">Guest</h3>
                <input
                  type="text"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="Total Guests"
                />
              </div>
              <div className="it-tour-package-search">
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
