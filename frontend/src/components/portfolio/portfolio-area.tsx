'use client';

import Image from 'next/image';
import { useState } from 'react';
import Masonry from 'react-masonry-css';

// Define the type for Portfolio Item
interface PortfolioItem {
  id: number;
  title: string;
  categories: string[];
  imageUrl: string;
}

// Mock data for portfolio items
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Discovery Islands',
    categories: ['cat-1'],
    imageUrl: '/assets/img/inner-page/destination/in-d-1.jpg',
  },
  {
    id: 2,
    title: 'Cuba Sailing Adventure',
    categories: ['cat-3', 'cat-2', 'cat-4'],
    imageUrl: '/assets/img/inner-page/destination/in-d-2.jpg',
  },
  {
    id: 3,
    title: 'Tour in New York',
    categories: ['cat-1', 'cat-3'],
    imageUrl: '/assets/img/inner-page/destination/in-d-3.jpg',
  },
  {
    id: 4,
    title: 'Dhaka Bangladesh',
    categories: ['cat-1'],
    imageUrl: '/assets/img/inner-page/destination/in-d-4.jpg',
  },
  {
    id: 5,
    title: 'San Martens',
    categories: ['cat-3', 'cat-2', 'cat-4'],
    imageUrl: '/assets/img/inner-page/destination/in-d-5.jpg',
  },
  {
    id: 6,
    title: 'Swizer Lands',
    categories: ['cat-1', 'cat-3'],
    imageUrl: '/assets/img/inner-page/destination/in-d-6.jpg',
  },
];

// Define categories for filtering
const categories = [
  { label: 'All', value: '*' },
  { label: 'Adventure', value: 'cat-1' },
  { label: 'Family Friendly', value: 'cat-2' },
  { label: 'Martinlife', value: 'cat-3' },
];

const PortfolioMasonry: React.FC = () => {
  const [filter, setFilter] = useState<string>('*');

  // Filter portfolio items based on selected category
  const filteredItems =
    filter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.categories.includes(filter));

  // Masonry breakpoint columns
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="it-portfolio-area it-inner-destination pt-120 pb-85">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="it-portfolio-title-box">
              <span className="it-section-subtitle">Recent Portfolio</span>
              <h3 className="it-section-title">
                Checkout our recently completed work
              </h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-portfolio-filter text-lg-end">
              <div className="masonary-menu">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    className={filter === cat.value ? 'active' : ''}
                    onClick={() => setFilter(cat.value)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Layout */}
        <div className="it-portfolio-wrap mt-65">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="grid"
            columnClassName="grid-column"
          >
            {filteredItems.map((item) => (
              <div key={item.id} className={`${item.categories.join(' ')}`}>
                <div className="it-dest-item">
                  <div className="it-dest-thumb fix mb-20">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={370}
                      height={250}
                      style={{ height: 'auto' }}
                    />
                  </div>
                  <div className="it-dest-content d-flex align-items-center justify-content-between">
                    <div className="it-dest-text">
                      <h3 className="it-dest-title">
                        <a href="#">{item.title}</a>
                      </h3>
                      <span>Adventure</span>
                    </div>
                    <div className="it-dest-icon">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMasonry;
