import Image from 'next/image';

import shapeImg from '@/assets/img/home-5/cta/maps-shape.png';

const NewsletterTwo = () => {
  return (
    <div className="it-newsletter-area it-newsletter-height fix p-relative theme-bg">
      <div className="it-newsletter-shape-1 cta-5-shape d-none d-lg-block">
        <Image src={shapeImg} alt="Shape Img" width={1920} height={300} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="it-newsletter-left">
              <h4 className="it-section-title">Keep up to date with us</h4>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="it-newsletter-right text-end">
              <div className="it-stories-input p-relative mb-10">
                <input type="text" placeholder="Enter your email:" />
                <button className="it-btn-secondary" type="submit">
                  <span>subscribe now</span>
                </button>
              </div>
              <div className="it-stories-checkbox d-flex align-items-center d-none d-lg-flex">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I have read and agree to the terms & conditions
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsletterTwo;
