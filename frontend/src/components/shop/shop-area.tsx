'use client';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { productDataTwo } from '@/data/product-data';
import ShopItemTwo from './shop-item/shop-item-two';

const ShopArea = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Define the number of items per page

  // Calculate items to display for the current page
  const offset = currentPage * itemsPerPage;
  const currentProducts = productDataTwo.slice(offset, offset + itemsPerPage);

  // Calculate total pages required
  const pageCount = Math.ceil(productDataTwo.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };
  return (
    <div className="it-shop-area it-shop-inner-style it-shop-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row">
          {currentProducts.map((product) => (
            <div key={product.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <ShopItemTwo product={product} />
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
export default ShopArea;
