'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import {
  AnimalSvg,
  FaceMaskSvg,
  ParaglidingSvg,
  RightArrowZigzag,
  SportSvg,
  WindSurfingSvg,
} from '../svg';

const categoryData = [
  { id: 1, icon: <WindSurfingSvg />, title: 'Windsurfing' },
  { id: 2, icon: <ParaglidingSvg />, title: 'Paragliding' },
  { id: 3, icon: <SportSvg />, title: 'Sports' },
  { id: 4, icon: <AnimalSvg />, title: 'Wildlife' },
  { id: 5, icon: <FaceMaskSvg />, title: 'Halloween' },
  { id: 6, icon: <SportSvg />, title: 'Sports' },
];

const CategoryOne = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1200': {
        slidesPerView: 5,
      },
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
    <div className="it-categories-area it-categories-pd black-bg">
      <div className="it-categories-wrap p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-6">
              <div className="it-categories-title-box mb-55 p-relative">
                <div className="it-categories-shape d-none d-xl-block">
                  <span>
                    <RightArrowZigzag />
                  </span>
                </div>
                <span className="it-section-subtitle">Category</span>
                <h3 className="it-section-title text-white">select category</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="it-categories-arrow-box">
                <button className="it-cat-prev" tabIndex={0}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="it-cat-next" tabIndex={0}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="swiper-container it-categories-active">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {categoryData.map((category) => (
                    <SwiperSlide key={category.id} className="swiper-slide">
                      <div className="it-categories-item text-center">
                        <div className="it-categories-icon mb-15">
                          <span>{category.icon}</span>
                        </div>
                        <h3 className="it-categories-title">
                          <a href="#">{category.title}</a>
                        </h3>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryOne;
