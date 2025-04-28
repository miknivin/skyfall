'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { teamDataOne } from '@/data/team-data';
import TeamItemOne from './team-item/team-item-one';

const TeamTwo = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '992': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
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
    <div className="it-team-area it-team-style-2 pt-120 pb-90">
      <div className="container">
        <div className="swiper-container it-team-active">
          <Swiper
            modules={[Autoplay]}
            {...sliderOption}
            className="swiper-wrapper"
          >
            {teamDataOne.map((team) => (
              <SwiperSlide key={team.id} className="swiper-slide">
                <TeamItemOne team={team} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default TeamTwo;
