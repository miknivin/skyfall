'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import SearchTourForm from '../form/search-tour-form';

const heroData = [
  {
    id: 1,
    bg: '/assets/img/home-1/slider/slider-1-1.jpg',
    subtitle: 'Memories For Life',
    title: `Let's Explore the world`,
  },
  {
    id: 2,
    bg: '/assets/img/home-1/slider/slider-1-2.jpg',
    subtitle: 'Memories For Life',
    title: `Let's Explore the world`,
  },
  {
    id: 3,
    bg: '/assets/img/home-1/slider/slider-1-3.jpg',
    subtitle: 'Memories For Life',
    title: `Let's Explore the world`,
  },
];

const HeroBannerOne = () => {
  const sliderOption: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div className="it-slider-area fix">
      <div className="it-slider-wrapper p-relative">
        <div className="swiper-container it-slider-active">
          <Swiper
            modules={[Autoplay, EffectFade]}
            {...sliderOption}
            className="swiper-wrapper"
          >
            {heroData.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="it-slider-item it-slider-overlay it-slider-height p-relative d-flex align-items-center">
                  <div
                    className="it-slider-bg"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  ></div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                        <div className="it-slider-title-box text-center mb-85 z-index">
                          <span className="it-section-subtitle text-white">
                            {item.subtitle}
                          </span>
                          <h3 className="it-slider-title">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="it-tour-package-main">
          <div className="container">
            <SearchTourForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerOne;
