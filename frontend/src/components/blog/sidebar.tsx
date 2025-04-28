import Image from 'next/image';
import Link from 'next/link';
import { blogData } from '@/data/blog-data';
import { IBlogDT } from '@/types/blog-d-t';

const categories = [
  'Adventure',
  'Hiking',
  'Romance',
  'Beach Tour',
  'City Tour',
  'Sports Tour',
];

const BlogSidebar = () => {
  // Function to convert the date string to a Date object for comparison
  const sortByPublishedDate = (a: IBlogDT, b: IBlogDT): number => {
    const dateA = a.publishedDate ? new Date(a.publishedDate) : new Date(0); // Fallback for undefined
    const dateB = b.publishedDate ? new Date(b.publishedDate) : new Date(0); // Fallback for undefined
    return dateB.getTime() - dateA.getTime();
  };

  // Sort the blogs
  const recentBlogs = blogData.sort(sortByPublishedDate).slice(0, 3);

  return (
    <div className="sidebar-wrapp">
      <div className="sidebar-widget mb-55">
        <div className="sidebar-search-box p-relative">
          <div className="sidebar-search-input">
            <input type="text" placeholder="Search here" />
          </div>
          <div className="sidebar-search-button">
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="sidebar-widget mb-55">
        <h4 className="sidebar-widget-title mb-40">Category</h4>
        <div className="sidebar-widget-list">
          {categories.map((category, index) => (
            <Link key={index} href="#" className={index === 1 ? 'active' : ''}>
              {category}
              <i className="fa-regular fa-angle-right"></i>
            </Link>
          ))}
        </div>
      </div>
      <div className="sidebar-widget mb-55">
        <h4 className="sidebar-widget-title mb-40">Recent post:</h4>
        <div className="sidebar-widget-content">
          <div className="sidebar-widget-post">
            {recentBlogs.map((item) => (
              <div key={item.id} className="rc-post d-flex align-items-center">
                <div className="rc-post-thumb mr-20">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={90}
                      height={90}
                      style={{ objectFit: 'cover' }}
                    />
                  </Link>
                </div>
                <div className="rc-post-content">
                  <div className="rc-meta d-flex mb-20">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>{item.publishedDate}</span>
                  </div>
                  <h3 className="rc-post-title mb-5">
                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar-widget mb-40">
        <div className="sideba-widge-title-box">
          <h3 className="sidebar-widget-title sm-border mb-35">Popular Tag</h3>
        </div>
        <div className="sidebar-widget-content">
          <div className="tagcloud">
            <a href="#">Adventure</a>
            <a href="#">Camping</a>
            <a href="#">soil preparation</a>
            <a href="#">Travels</a>
            <a href="#">Solar Energy</a>
            <a href="#">Natural</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
