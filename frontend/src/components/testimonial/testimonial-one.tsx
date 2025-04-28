'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import { testimonialDataOne } from '@/data/testimonial-data';

import shapeImg1 from '@/assets/img/home-1/testimonial/shape/maps.png';
import shapeImg2 from '@/assets/img/home-1/testimonial/shape/tree.png';

const TestimonialOne = () => {
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
    <div className="it-testimonial-area fix pt-120 pb-120 p-relative fix">
      <div className="it-testimonial-shape-box d-none d-xl-block">
        <div className="it-testimonial-shape-1">
          <Image src={shapeImg1} alt="Shape Img" width={174} height={184} />
        </div>
        <div className="it-testimonial-shape-2">
          <Image src={shapeImg2} alt="Shape Img" width={168} height={215} />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="it-testimonial-title-box text-center mb-20">
              <span className="it-section-subtitle">Testimonial</span>
              <h3 className="it-section-title">What Our Users Say</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="swiper-container">
              <Swiper
                modules={[Autoplay]}
                {...sliderOption}
                className="swiper-wrapper it-testimonial-active"
              >
                {testimonialDataOne.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="swiper-slide">
                    <div className="it-testimonial-item">
                      <div className="it-testimonial-rating">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="it-testimonial-dsc">
                        <p>{testimonial.description}</p>
                      </div>
                      <div className="it-testimonial-avater-box d-flex align-items-center">
                        <div className="it-testimonial-avater-thumb p-relative">
                          {testimonial.avatar && (
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={60}
                              height={61}
                            />
                          )}

                          <div className="it-testimonial-avater-icon">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                        </div>
                        <div className="it-testimonial-avater-info">
                          <h3 className="it-testimonial-avater-title">
                            {testimonial.author}
                          </h3>
                          <span className="it-testimonial-avater-designation">
                            {testimonial.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialOne;
