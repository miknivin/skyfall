import Image from 'next/image';
import Link from 'next/link';
import Counter from '../funfact/counter-item/counter-item';

import shapeImg1 from '@/assets/img/home-1/offer/shape/shape-big.jpg';
import shapeImg2 from '@/assets/img/home-1/offer/shape/shape-small.jpg';
import shapeImg3 from '@/assets/img/home-1/offer/shape/country.png';
import girlImg from '@/assets/img/home-1/offer/shape/girls.png';

const OfferOne = () => {
  return (
    <div
      className="it-offer-area fix it-offer-overlay p-relative pt-165 pb-145"
      style={{
        backgroundImage: `url('/assets/img/home-1/offer/img/offer-bg.jpg')`,
      }}
    >
      <div className="it-offer-shape-box">
        <div className="it-offer-shape-1">
          <Image src={shapeImg1} alt="Shape Img" width={475} height={564} />
        </div>
        <div className="it-offer-shape-2">
          <Image src={shapeImg2} alt="Shape Img" width={476} height={488} />
        </div>
        <div className="it-offer-shape-3">
          <Image src={shapeImg3} alt="Shape Img" width={161} height={178} />
        </div>
      </div>
      <div className="it-offer-discount-thumb d-none d-xxl-block">
        <Image
          src={girlImg}
          alt="Girl"
          width={376}
          height={543}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="container-fluid container-1285">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="it-offer-content z-index">
              <div className="it-offer-title-box mb-35">
                <span className="it-offer-subtitle">Special Offer</span>
                <h3 className="it-offer-section-title text-white">
                  Travel The world
                </h3>
              </div>
              <div className="it-offer-button">
                <Link href="/contact" className="it-btn-primary">
                  Start Booking
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="it-offer-discount z-index">
              <div className="it-offer-discount-circle d-flex justify-content-center align-items-center">
                <div className="it-offer-discount-number">
                  <h3 className="it-offer-number">
                    <Counter start={0} end={75} duration={3} />
                  </h3>
                </div>
                <div className=" it-offer-discount">
                  <span>%</span>
                  <span>off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferOne;
