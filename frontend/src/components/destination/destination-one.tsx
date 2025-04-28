'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { destinationDataOne } from '@/data/destination-data';
import DestinationItemOne from './destination-item/destination-item-one';

import shapeImg1 from '@/assets/img/home-1/destination/shape/Ballon-1.png';
import shapeImg2 from '@/assets/img/home-1/destination/shape/star.png';

const DestinationOne = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1200': {
        slidesPerView: 4,
      },
      '992': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },

      '0': {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="it-destination-area p-relative pt-120 pb-120 fix">
      <div className="it-destination-shape-box d-none d-xl-block">
        <div className="it-destination-shape-1">
          <Image
            src={shapeImg1}
            alt="Shape Img"
            width={139}
            height={191}
            style={{ height: 'auto' }}
          />
        </div>
        <div className="it-destination-shape-2">
          <Image
            src={shapeImg2}
            alt="Shape Img"
            width={70}
            height={72}
            style={{ height: 'auto' }}
          />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="it-destination-title-box text-center mb-75">
              <span className="it-section-subtitle">Top Destinations</span>
              <h3 className="it-section-title">
                Explore the Beautiful Places Around the World
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-destination-slider-wrap">
              <div className="swiper-container it-destination-slider-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {destinationDataOne.map((destination) => (
                    <SwiperSlide key={destination.id} className="swiper-slide">
                      <DestinationItemOne destination={destination} />
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
export default DestinationOne;
