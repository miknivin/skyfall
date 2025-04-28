'use client';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import TourItemFour from './tour-item/tour-item-four';
import { tourPackagesDataThree } from '@/data/tour-packages-data';

const TourList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Define the number of items per page

  // Calculate items to display for the current page
  const offset = currentPage * itemsPerPage;
  const currentTours = tourPackagesDataThree.slice(
    offset,
    offset + itemsPerPage
  );

  // Calculate total pages required
  const pageCount = Math.ceil(tourPackagesDataThree.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="it-tour-area it-tour-style it-featured-4 pt-120 pb-90 p-relative">
      <div className="container">
        <div className="it-featured-item-wrap">
          <div className="row">
            {currentTours.map((tour) => (
              <div key={tour.id} className="col-xl-4 col-lg-6 col-md-6">
                <TourItemFour tour={tour} />
              </div>
            ))}
          </div>
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

export default TourList;
