'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { eventDataOne } from '@/data/event-data';
import ReactPaginate from 'react-paginate';

const EventGridArea = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Define the number of items per page

  // Calculate items to display for the current page
  const offset = currentPage * itemsPerPage;
  const currentEvents = eventDataOne.slice(offset, offset + itemsPerPage);

  // Calculate total pages required
  const pageCount = Math.ceil(eventDataOne.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="it-events-area it-events-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row">
          {currentEvents.map((event) => (
            <div key={event.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="it-events-item">
                <div className="it-events-date-box d-flex align-items-center justify-content-center">
                  <span className="it-events-date">{event.eventDate}</span>
                  <h5 className="it-events-month">{event.eventMonth}</h5>
                  <span className="it-events-time">{event.eventTime}</span>
                </div>
                <div className="it-events-thumb fix">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={370}
                    height={212}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-events-content">
                  <div className="it-events-meta mb-10 d-flex align-items-center">
                    <div className="it-events-meta-icon mr-5">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <span className="it-events-meta-text">
                      {event.eventAddress}
                    </span>
                  </div>
                  <h3 className="it-events-title">
                    <Link href={`/event-details/${event.id}`}>
                      {event.title}
                    </Link>
                  </h3>
                  <p>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-pagination">
              <ReactPaginate
                previousLabel={<i className="fa-solid fa-arrow-left-long"></i>}
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
  );
};
export default EventGridArea;
