'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import { tourPackagesDataThree } from '@/data/tour-packages-data';
import TourItemFour from './tour-item/tour-item-four';
import { LoveShape } from '../svg';

const TourFive = () => {
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
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
    navigation: {
      prevEl: '.it-cat-prev',
      nextEl: '.it-cat-next',
    },
  };
  return (
    <div className="it-featured-area inner-feat-style it-featured-4 pt-120 pb-120 p-relative">
      <div className="container">
        <div className="it-featured-title-wrap p-relative">
          <div className="it-featured-shape d-none d-lg-block">
            <span>
              <LoveShape />
            </span>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="it-featured-title-box z-index mb-60">
                <span className="it-section-subtitle">Featured Tours</span>
                <h3 className="it-section-title">
                  Amazing tour Places around the world
                </h3>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="it-categories-arrow-box z-index text-md-end">
                <button className="it-cat-prev" tabIndex={0}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="it-cat-next" tabIndex={0}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="it-featured-item-wrap">
          <div className="row">
            <div className="col-xl-12">
              <div className="swiper-container inner-feat-active">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {tourPackagesDataThree
                    .map((tour) => (
                      <SwiperSlide key={tour.id} className="swiper-slide">
                        <TourItemFour tour={tour} />
                      </SwiperSlide>
                    ))
                    .slice(0, 5)}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourFive;
