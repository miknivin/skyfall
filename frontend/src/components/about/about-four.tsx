import Image from 'next/image';
import Counter from '../funfact/counter-item/counter-item';
import { AboutShapeOne, AboutShapeTwo, RightArrow } from '../svg';

import aboutImg1 from '@/assets/img/inner-page/about/inner-ab-1-1.jpg';
import aboutImg2 from '@/assets/img/inner-page/about/inner-ab-1-2.jpg';
import aboutImg3 from '@/assets/img/inner-page/about/inner-ab-1-3.jpg';

const counterData = [
  {
    id: 1,
    countNum: 25,
    countSubtext: '+',
    countTitle: 'Our Explorers',
  },
  {
    id: 2,
    countNum: 300,
    countSubtext: '+',
    countTitle: 'Destinations',
  },
  {
    id: 3,
    countNum: 25,
    countSubtext: '+',
    countTitle: 'Years experience',
  },
];

const AboutFour = () => {
  return (
    <div className="it-about-area inner-about-style pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-thumb-wrap d-sm-flex align-items-center justify-content-center justify-content-lg-end">
              <div className="it-about-thumb-box d-flex flex-column">
                <div className="it-about-thumb-1 text-center text-sm-end">
                  <Image
                    src={aboutImg1}
                    alt="About Img"
                    width={222}
                    height={222}
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="it-about-thumb-2">
                  <Image
                    src={aboutImg2}
                    alt="About Img"
                    width={335}
                    height={385}
                    style={{ height: 'auto' }}
                  />
                </div>
              </div>
              <div className="it-about-thumb-single text-center text-sm-start">
                <div className="it-about-thumb-shape d-none d-sm-block">
                  <AboutShapeOne />
                </div>
                <Image
                  src={aboutImg3}
                  alt="About Img"
                  className="mb-30"
                  width={270}
                  height={278}
                  style={{ height: 'auto' }}
                />
                <div className="it-about-experience p-relative">
                  <div className="it-about-experience-icon">
                    <span>
                      <AboutShapeTwo />
                    </span>
                  </div>
                  <h3 className="it-about-experience-number">
                    <Counter
                      start={0}
                      end={29}
                      duration={3}
                      counterSubText="+"
                    />
                  </h3>
                  <i>years of experience.</i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-title-box mb-30">
              <span className="it-section-subtitle">about us</span>
              <h2 className="it-section-title mb-20">
                Sollicitudin Vestibulum Vulputate Ipsum.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <div className="it-about-counter-box mb-20">
              <div className="row">
                {counterData.map((item) => (
                  <div
                    key={item.id}
                    className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                  >
                    <div className="it-about-counter-text">
                      <h3 className="it-about-counter-number">
                        <Counter
                          start={0}
                          end={item.countNum}
                          duration={2}
                          counterSubText={item.countSubtext}
                        />
                      </h3>
                      <p>{item.countTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="it-about-counter-button">
              <a href="#" className="it-btn-primary">
                <span>
                  Discover More
                  <RightArrow />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutFour;
