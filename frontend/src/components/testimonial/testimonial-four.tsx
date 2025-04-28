'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { testimonialDataFour } from '@/data/testimonial-data';

import shapeImg1 from '@/assets/img/home-4/testimonial/thumb/l-shape.png';
import shapeImg2 from '@/assets/img/home-4/testimonial/thumb/r-shape.png';

const TestimonialFour = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.it-testi-4-dots',
      clickable: true,
    },
  };
  return (
    <div
      className="it-testi-4-area it-testi-4-bg p-relative pt-120 pb-120"
      style={{
        backgroundImage: `url('/assets/img/home-4/testimonial/testi-4-1-bg.jpg')`,
      }}
    >
      <div className="it-testi-4-shape-1 d-none d-xl-block">
        <Image src={shapeImg1} alt="Shape Img" width={424} height={358} />
      </div>
      <div className="it-testi-4-shape-2 d-none d-xl-block">
        <Image src={shapeImg2} alt="Shape Img" width={300} height={479} />
      </div>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xl-8">
            <div className="it-testi-4-title-box mb-60 text-center">
              <span className="it-section-subtitle subtitle-green">
                Testimonial
              </span>
              <h3 className="it-section-title text-white">
                What our Customers are <br />
                <span className="it-breack-text">saying us?</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8">
            <div className="it-testi-4-slider-wrap">
              <div className="swiper-container it-testi-4-active">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {testimonialDataFour.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="swiper-slide">
                      <div className="it-testi-4-avater-box text-center">
                        <div className="it-testi-4-avater mb-25">
                          {testimonial.avatar && (
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={69}
                              height={70}
                            />
                          )}
                        </div>
                        <h3 className="it-testi-4-avater-title">
                          {testimonial.author}
                        </h3>
                        <div className="it-testi-4-designation-box d-flex align-items-center justify-content-center">
                          <span className="it-testi-4-designation-title mr-5">
                            {testimonial.designation}
                          </span>
                          <div className="it-testi-4-designation-review">
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
                        </div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: testimonial.description,
                          }}
                        ></p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-25">
          <div className="it-testi-4-dots"></div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialFour;
