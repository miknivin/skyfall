'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { RightArrow, SearchSvg } from '../svg';
import { eventDataTwo } from '@/data/event-data';

const EventListArea = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Define the number of items per page

  // Calculate items to display for the current page
  const offset = currentPage * itemsPerPage;
  const currentEvents = eventDataTwo.slice(offset, offset + itemsPerPage);

  // Calculate total pages required
  const pageCount = Math.ceil(eventDataTwo.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  // Handler to toggle dropdown
  const toggleDropdown = useCallback((): void => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  // Close the dropdown when clicking outside the button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="it-events-area pt-120 pb-120">
      <div className="container">
        <div className="it-events-top mb-80">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="it-events-control-box d-flex align-items-center">
                <div className="it-events-control-icon">
                  <button>
                    <i className="fa-light fa-angle-left"></i>
                  </button>
                  <button>
                    <i className="fa-light fa-angle-right"></i>
                  </button>
                </div>
                <span className="it-events-control-date">Today</span>
                <div className="it-events-categories">
                  <span
                    ref={dropdownRef}
                    className="it-events-selected it-events-title"
                    onClick={toggleDropdown}
                  >
                    Upcoming
                  </span>
                  <ul
                    className={
                      isDropdownOpen
                        ? 'it-events-list it-events-list-open'
                        : 'it-events-list'
                    }
                  >
                    <li>Spanish</li>
                    <li>English</li>
                    <li>Canada</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="it-events-search-wrap">
                <div className="it-events-search-box d-lg-flex align-items-center justify-content-end">
                  <div className="it-events-search-input p-relative">
                    <input type="text" placeholder="Search for events" />
                    <div className="it-events-search-icon">
                      <button>
                        <SearchSvg />
                      </button>
                    </div>
                  </div>
                  <div className="it-events-search-list">
                    <button className="it-events-list-btn">Find Events</button>
                    <button className="it-events-list-btn">List</button>
                    <button className="it-events-list-btn">Month</button>
                    <button className="it-events-list-btn">Day</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-events-bottom">
          <div className="row">
            {currentEvents.map((event) => (
              <div key={event.id} className="col-xl-12">
                <div className="it-events-item">
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                      <div className="it-events-thumb-box p-relative">
                        <div className="it-events-date-box d-flex align-items-center">
                          <span className="it-events-date">
                            {event.eventDate}
                          </span>
                          <div className="it-events-meta">
                            <h5 className="it-events-month">
                              {event.eventMonth}
                            </h5>
                            <span className="it-events-time">
                              {event.eventTime}
                            </span>
                          </div>
                        </div>
                        <div className="it-events-thumb fix">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={260}
                            height={212}
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                      <div className="it-events-content">
                        <h3 className="it-events-title">
                          <Link href={`/event-details/${event.id}`}>
                            {event.title}
                          </Link>
                        </h3>
                        <div className="it-events-meta mb-20 d-flex align-items-center">
                          <div className="it-events-meta-icon mr-5">
                            <i className="fa-solid fa-location-dot"></i>
                          </div>
                          <span className="it-events-meta-text">
                            {event.eventAddress}
                          </span>
                        </div>
                        <p>{event.description}</p>
                        <div className="it-events-btn">
                          <Link
                            href={`/event-details/${event.id}`}
                            className="it-btn-primary"
                          >
                            <span>
                              Join Event <RightArrow />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="it-pagination">
                <ReactPaginate
                  previousLabel={
                    <i className="fa-solid fa-arrow-left-long"></i>
                  }
                  nextLabel={<i className="fa-solid fa-arrow-right-long"></i>}
                  breakLabel="..."
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  activeClassName="active"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventListArea;
