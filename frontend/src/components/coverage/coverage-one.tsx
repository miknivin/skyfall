import Image from 'next/image';
import Link from 'next/link';

import shapeImg from '@/assets/img/home-4/coverage/ballon1.png';
import mapImg from '@/assets/img/home-4/coverage/thumb/map-1.png';

const CoverageOne = () => {
  return (
    <div className="it-coverage-area grey-bg pt-120 pb-120 p-relative">
      <div className="it-coverage-shape-1 d-none d-md-block">
        <Image src={shapeImg} alt="Shape Img" width={95} height={130} />
      </div>
      <div className="container">
        <div className="it-coverage-title-wrap mb-65">
          <div className="row align-items-end">
            <div className="col-xl-8">
              <div className="it-coverage-title-box">
                <span className="it-section-subtitle">Country Coverage</span>
                <h3 className="it-section-title">Our best country Coverge</h3>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="it-coverage-button text-start text-lg-end">
                <Link href="/about" className="it-btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="it-coverage-wrap z-index">
          <div className="row">
            <div className="col-xl-10">
              <div className="it-coverage-maps-wrap">
                <div className="it-coverage-maps-wrap">
                  <div className="it-country-maps-thumb">
                    <Image
                      src={mapImg}
                      alt="Map Image"
                      width={902}
                      height={587}
                      style={{ height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="it-coverage-top">
                <div className="it-coverage-button-box">
                  <a href="#">Australia</a>
                  <a href="#">Bangladesh</a>
                  <a href="#">Nigeria</a>
                  <a href="#">Kazakhstan</a>
                  <a href="#">New Zealand</a>
                  <a href="#">Philippines</a>
                  <a className="active" href="#">
                    Singapore
                  </a>
                  <a href="#">Melbone</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoverageOne;
