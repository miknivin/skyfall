import Image from 'next/image';
import {
  ChooseSvg1,
  ChooseSvg2,
  ChooseSvg3,
  ChooseSvg4,
  ChooseSvg5,
} from '../svg';

import shapeImg from '@/assets/img/inner-page/chooseuse/inn-chooseus-shape.jpg';
import chooseImg from '@/assets/img/inner-page/chooseuse/inn-chooseus1.jpg';

const chooseData = [
  [
    {
      id: 1,
      icon: <ChooseSvg1 />,
      title: 'Amazing Tour Plans',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..',
    },
    {
      id: 2,
      icon: <ChooseSvg2 />,
      title: 'Best Travel Guide',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..',
    },
  ],
  [
    {
      id: 3,
      icon: <ChooseSvg3 />,
      title: 'Easy Booking Options',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..',
    },
    {
      id: 4,
      icon: <ChooseSvg4 />,
      title: 'World Insurance Included',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..',
    },
  ],
];

const ChooseSeven = () => {
  return (
    <div className="it-chooseus-3 it-chooseus-5 it-inner-chooseus pt-120 pb-120 p-relative">
      <div className="it-inner-chooseus-shape-box">
        <div className="it-inner-chooseus-shape-1">
          <Image src={shapeImg} alt="Shape Img" width={313} height={311} />
        </div>
        <div className="it-inner-chooseus-shape-2">
          <span>
            <ChooseSvg5 />
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="it-about-content p-relative">
              <div className="it-chooseus-title-box mb-30">
                <span className="it-section-subtitle">What we do</span>
                <h3 className="it-section-title mb-20">
                  We Arrange the Best Tour <br />
                  Ever Possible.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="row">
                {chooseData.map((choose, index) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
                  >
                    {choose.map((item) => (
                      <div
                        key={item.id}
                        className="it-about-service-item mb-40"
                      >
                        <div className="it-about-service-icon mr-20">
                          <span>{item.icon}</span>
                        </div>
                        <div className="it-about-service-text">
                          <h3 className="it-about-service-title">
                            {item.title}
                          </h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="it-chooseus-thumb-box ml-10 p-relative">
              <div className="it-chooseus-main-thumb text-center text-lg-end">
                <Image
                  src={chooseImg}
                  alt="Choose Img"
                  width={581}
                  height={700}
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseSeven;
