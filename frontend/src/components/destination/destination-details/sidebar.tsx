import Image from 'next/image';
import Link from 'next/link';
import { tourPackagesDataThree } from '@/data/tour-packages-data';
import { updatePrice } from '@/utils/helper';

const Sidebar = () => {
  return (
    <div className="it-discover-right">
      <div className="it-discover-package mb-60">
        <div className="sidebar-widget-wrapper mb-30">
          <div className="sidebar-widget widget">
            <h6 className="sidebar-widget-title small mb-15">Search Here</h6>
            <div className="sidebar-search">
              <form className="sidebar-search-form" action="#" method="get">
                <input placeholder="Search Destination" type="text" name="s" />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="sidebar-widget-divider"></div>

          <div className="sidebar-widget widget">
            <h6 className="sidebar-widget-title small mb-15">
              Contact for Booking
            </h6>
            <div className="sidebar-booking">
              <form className="sidebar-booking-form">
                <div className="input-box">
                  <input placeholder="Name" type="text" name="name" />
                </div>
                <div className="input-box">
                  <input placeholder="Email" type="email" name="email" />
                </div>
                <div className="input-box">
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Type Comment here"
                    name="comment"
                  ></textarea>
                </div>
                <div className="booking-btn">
                  <button
                    className="it-btn-primary bd-btn btn-style radius-4 w-100"
                    type="submit"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="it-discover-deals">
        <h3 className="it-discover-package-title">Recent Tours</h3>
        <div className="it-discover-deals-box">
          {tourPackagesDataThree
            .map((item) => (
              <div key={item.id} className="it-discover-deals-item">
                <div className="it-discover-deals-content d-flex align-items-center">
                  <div className="it-discover-deals-thumb">
                    <a href="#">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={90}
                        height={90}
                        style={{ height: 'auto' }}
                      />
                    </a>
                  </div>
                  <div className="it-discover-deals-dsc">
                    <div className="it-discover-deals-rating">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <h3 className="it-discover-deals-text">
                      <Link href={`/tour-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <span className="it-discover-deals-price">
                      From <span>${Math.round(updatePrice(item))}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))
            .slice(2, 5)}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
