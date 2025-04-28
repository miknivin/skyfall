import Image from 'next/image';
import { ChooseSvg6, ChooseSvg7, ChooseSvg8 } from '../svg';

import chooseImg from '@/assets/img/inner-page/chooseuse/in-chooseus-3.jpg';

const chooseData = [
  {
    id: 1,
    icon: <ChooseSvg6 />,
    title: 'Ultimate Flexibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    id: 2,
    icon: <ChooseSvg7 />,
    title: 'Memorable experiences',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    id: 3,
    icon: <ChooseSvg8 />,
    title: 'Outdo sports',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

const ChooseEight = () => {
  return (
    <div
      className="it-about-area it-inner-chooseus-2 pt-120 pb-120 p-relative"
      style={{
        backgroundImage: `url('/assets/img/inner-page/chooseuse/in-chooseus-bg.png')`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 oder-md-0">
            <div className="it-about-content p-relative">
              <div className="it-about-title-box mb-20">
                <span className="it-section-subtitle">Why Choose us</span>
                <h3 className="it-section-title mb-20">
                  Sollicitudin Vestibulum Vulputate Ipsum.
                </h3>
              </div>
              {chooseData.map((choose) => (
                <div
                  key={choose.id}
                  className="it-about-service-item mb-40 d-sm-flex align-items-center"
                >
                  <div className="it-about-service-icon mr-20">
                    <span>{choose.icon}</span>
                  </div>
                  <div className="it-about-service-text">
                    <h3 className="it-about-service-title">{choose.title}</h3>
                    <p>{choose.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 oder-md-1">
            <div className="it-about-thumb-wrap d-flex justify-content-center">
              <div className="it-about-main-thumb z-index p-relative">
                <Image
                  src={chooseImg}
                  alt="Choose Img"
                  width={528}
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
export default ChooseEight;
