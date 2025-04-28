'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { teamDataTwo } from '@/data/team-data';
import TeamItemTwo from './team-item/team-item-two';

const TeamThree = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000 },
    breakpoints: {
      '1200': {
        slidesPerView: 4,
      },
      '992': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 3,
      },
      '576': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="it-team-3-area it-team-style-3 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="it-team-3-title-box text-center mb-70">
              <span className="it-section-subtitle">Our Best Guide</span>
              <h3 className="it-section-title">Meet our best expert</h3>
            </div>
          </div>
        </div>
        <div className="it-team-3-wrap">
          <div className="swiper-container it-team-3-active">
            <Swiper
              modules={[Autoplay]}
              {...sliderOption}
              className="swiper-wrapper text-center text-sm-start"
            >
              {teamDataTwo.map((team) => (
                <SwiperSlide key={team.id} className="swiper-slide">
                  <TeamItemTwo team={team} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamThree;
