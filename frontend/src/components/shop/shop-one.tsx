'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { productDataOne } from '@/data/product-data';
import ShopItemOne from './shop-item/shop-item-one';

const ShopOne = () => {
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
  };
  return (
    <div
      className="it-shop-area pt-120 pb-70 grey-bg fix"
      style={{ backgroundImage: `url('/assets/img/home-1/shop/shop-bg.png')` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="it-shop-title-box mb-60 text-center">
            <span className="it-section-subtitle">Shop</span>
            <h3 className="it-section-title">Our special product</h3>
          </div>
        </div>
        <div className="swiper-container it-shop-active">
          <Swiper
            modules={[Autoplay]}
            {...sliderOption}
            className="swiper-wrapper"
          >
            {productDataOne.map((product) => (
              <SwiperSlide key={product.id} className="swiper-slide">
                <ShopItemOne product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ShopOne;
