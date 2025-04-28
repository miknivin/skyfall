'use client';

import Image from 'next/image';
import { useState } from 'react';
import Masonry from 'react-masonry-css';

// Define type for Story Item
interface StoryItem {
  id: number;
  title: string;
  category: string[];
  date: string;
  imageUrl: string;
}

// Mock data for stories
const stories: StoryItem[] = [
  {
    id: 1,
    title: 'Top 10 remote destinations to see in your lifetime',
    category: ['cat-1', 'cat-5', 'cat-6'],
    date: 'April 28, 2024',
    imageUrl: '/assets/img/home-5/stories/stories-1.jpg',
  },
  {
    id: 2,
    title: 'Top 10 Cloud destinations to see in your lifetime',
    category: ['cat-3', 'cat-2', 'cat-4'],
    date: 'April 28, 2024',
    imageUrl: '/assets/img/home-5/stories/stories-2.jpg',
  },
  {
    id: 3,
    title: 'Top 10 Jungle destinations to see in your lifetime',
    category: ['cat-1', 'cat-3', 'cat-7'],
    date: 'April 28, 2024',
    imageUrl: '/assets/img/home-5/stories/stories-3.jpg',
  },
];

// Define categories for filtering
const categories = [
  { label: 'All', value: '*' },
  { label: 'Inspiration', value: 'cat-1' },
  { label: 'Lifestyle', value: 'cat-2' },
  { label: 'Food', value: 'cat-3' },
  { label: 'Need to know', value: 'cat-4' },
  { label: 'Bali', value: 'cat-5' },
  { label: 'Travel', value: 'cat-6' },
  { label: 'Work', value: 'cat-7' },
];

const StoriesOne: React.FC = () => {
  const [filter, setFilter] = useState<string>('*');

  // Filter stories based on selected category
  const filteredStories =
    filter === '*'
      ? stories
      : stories.filter((story) => story.category.includes(filter));

  // Masonry breakpoint columns
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="it-stories-area pt-120 pb-85 p-relative">
      <div className="container">
        <div className="it-stories-title-box mb-20 text-center">
          <span className="it-section-subtitle">Stories</span>
          <h3 className="it-section-title">Stories From The Road</h3>
        </div>

        {/* Masonry menu for filtering */}
        <div
          className={`masonary-menu mb-80 d-md-flex justify-content-md-center`}
        >
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

        {/* Masonry layout */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="grid"
          columnClassName="grid-column"
        >
          {filteredStories.map((story) => (
            <div key={story.id} className={`${story.category.join(' ')}`}>
              <div className="it-stories-item mb-30 p-relative">
                <div className="it-stories-thumb mb-30">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    width={370}
                    height={400}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-stories-content">
                  <div className="it-stories-meta-box mb-25 d-flex align-items-center">
                    <span className="it-stories-categories">Inspiration</span>
                    <span className="it-stories-meta-text">{story.date}</span>
                  </div>
                  <h3 className="it-stories-title">
                    <a href="tour.html">{story.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default StoriesOne;
