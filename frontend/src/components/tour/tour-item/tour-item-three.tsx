import Image from 'next/image';
import Link from 'next/link';
import { ITourDT } from '@/types/tour-packages-d-t';
import { updatePrice } from '@/utils/helper';

interface TourItemProps {
  tour: ITourDT;
}

const TourItemThree = ({ tour }: TourItemProps) => {
  return (
    <div className="it-featured-item p-relative">
      <div className="it-featured-thumb p-relative">
        <Image
          src={tour.image}
          alt={tour.title}
          width={370}
          height={250}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-featured-top d-flex align-items-center">
        {tour.badgeTitle && (
          <div className="it-featured-offer">
            <span>{tour.badgeTitle} off</span>
          </div>
        )}

        {tour.isFeature && (
          <div className="it-featured-categories">
            <span>featured</span>
          </div>
        )}
      </div>
      <div className="it-featured-content">
        <div className="it-featured-react-box d-flex align-items-center">
          <div className="it-featured-react">
            <button>
              <span>
                <i className="fa-light fa-heart"></i>
              </span>
            </button>
          </div>
          <div className="it-featured-react">
            <button>
              <span>
                <i className="fa-regular fa-camera"></i>
              </span>
            </button>
          </div>
        </div>
        <h3 className="it-featured-title">
          <Link href={`/tour-details/${tour.id}`}>{tour.title}</Link>
        </h3>
        <div className="it-featured-mid-box mb-30">
          <div className="it-featured-review-box">
            <div className="it-featured-review d-flex align-items-center">
              <i className="fa-solid fa-star"></i>
              <p>
                <span>{tour.rating}</span> ({tour.review}k review)
              </p>
            </div>
            <div className="it-featured-meta mb-15">
              <a href="https://www.google.com/maps">
                <i className="fa-solid fa-location-dot"></i> {tour.address}
              </a>
            </div>
          </div>
          <div className="it-featured-price-box d-flex align-items-center justify-content-between">
            <div className="it-featured-meta d-flex align-items-center">
              <div className="it-featured-time">
                <span>
                  <i className="fa-regular fa-clock"></i> {tour.duration} days
                </span>
              </div>
              <div className="it-featured-user">
                <span>
                  <i className="fa-regular fa-user"></i> {tour.travelerCount}
                </span>
              </div>
            </div>
            <div className="it-featured-price d-flex align-items-center">
              <i className="fa-regular fa-circle-dollar"></i>
              <p>
                From <span>${Math.round(updatePrice(tour)).toFixed(2)}</span>{' '}
                {tour.badgeTitle && <del>${tour.price.toFixed(2)}</del>}
              </p>
            </div>
          </div>
        </div>
        <div className="it-featured-bottom">
          <div className="it-featured-action text-center">
            <Link
              href={`/tour-details/${tour.id}`}
              className="it-btn-blog featured-btn-black w-100"
            >
              {tour.btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourItemThree;
