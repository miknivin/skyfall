'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogDataTwo } from '@/data/blog-data';
import ReactPaginate from 'react-paginate';
import BlogSidebar from '../sidebar';

const BlogSidebarArea = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Define the number of items per page

  // Calculate items to display for the current page
  const offset = currentPage * itemsPerPage;
  const currentBlogs = blogDataTwo.slice(offset, offset + itemsPerPage);

  // Calculate total pages required
  const pageCount = Math.ceil(blogDataTwo.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };
  return (
    <div className="postbox-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mb-40">
            <div className="postbox-details-wrapper">
              {currentBlogs.map((blog) => (
                <div key={blog.id} className="postbox-thumb-box mb-60">
                  <div className="postbox-main-thumb mb-30">
                    <Image
                      src={blog.image}
                      alt="Blog Img"
                      width={770}
                      height={400}
                      style={{ height: 'auto' }}
                    />
                  </div>
                  <div className="postbox-content-box">
                    <div className="postbox-meta mb-30">
                      <span>
                        <i className="fa-light fa-calendar-days"></i>
                        {blog.publishedDate}
                      </span>
                      <span>
                        <i className="fal fa-user"></i>
                        {blog.blogAuthor}
                      </span>
                    </div>
                    <h4 className="postbox-title">
                      <Link href={`/blog-details/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </h4>
                    <div className="postbox-text mt-15">
                      <p>{blog.blogText}</p>
                    </div>
                    <Link
                      className="it-btn-primary mt-15"
                      href={`/blog-details/${blog.id}`}
                    >
                      <span>Read more</span>
                    </Link>
                  </div>
                </div>
              ))}

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
          <div className="col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebarArea;
