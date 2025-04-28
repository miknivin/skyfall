'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialDataFive } from '@/data/testimonial-data';
import { QuoteSvg, RightArrow, TestimonialShape } from '../svg';
import Counter from '../funfact/counter-item/counter-item';

import shapeImg from '@/assets/img/inner-page/testimonial/inn-test-shape.png';

const TestimonialFive = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      prevEl: '.it-testi-prev',
      nextEl: '.it-testi-next',
    },
    pagination: {
      el: '.it-testi-inner-dots',
      clickable: true,
    },
  };
  return (
    <div
      className="it-testi-inner it-testi-inner-bg fix pt-120 pb-120 black-bg p-relative"
      style={{
        backgroundImage: `url('/assets/img/inner-page/testimonial/inn-test-bg.png')`,
      }}
    >
      <div className="it-testi-inner-shape-box">
        <div className="it-testi-inner-shape-1 d-none d-xxl-block">
          <span>
            <TestimonialShape />
          </span>
        </div>
        <div className="it-testi-inner-shape-2">
          <span>
            <Image src={shapeImg} alt="Shape Img" width={313} height={311} />
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="it-testi-inner-title-box">
              <h3 className="it-section-title text-white">
                What our Customers are{' '}
                <span className="it-breack-text">saying us?</span>
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="it-testi-inner-text mb-20 d-flex">
              <div className="it-testi-count-item mr-40">
                <h3 className="it-testi-count-number">
                  <Counter start={0} end={25} duration={3} counterSubText="+" />
                </h3>{' '}
                <p>Happy People</p>
              </div>
              <div className="it-testi-count-item">
                <h3 className="it-testi-count-number">
                  <Counter
                    start={0}
                    end={300}
                    duration={3}
                    counterSubText="+"
                  />
                </h3>
                <p>Overall Rating</p>
              </div>
            </div>
            <div className="it-testi-inner-button">
              <Link href="/testimonial" className="it-btn-primary">
                <span>
                  Discover More
                  <RightArrow />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7">
            <div className="it-testi-inner-wrapp p-relative">
              <div className="swiper-container inner-testi-active">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {testimonialDataFive.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="swiper-slide">
                      <div className="it-testi-inner-item p-relative">
                        <div className="it-testi-inner-review mb-20">
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div className="it-testi-inner-text">
                          <p>{testimonial.description}</p>
                        </div>
                        <div className="it-testi-inner-author-box d-flex align-items-center">
                          <div className="it-testi-inner-avater mr-20">
                            {testimonial.avatar && (
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                width={90}
                                height={90}
                                style={{ height: 'auto' }}
                              />
                            )}
                          </div>
                          <div className="it-testi-inner-author-info">
                            <h5>{testimonial.author}</h5>
                            <span>{testimonial.designation}</span>
                          </div>
                        </div>
                        <div className="it-testi-inner-quote d-none d-xl-block">
                          <span>
                            <QuoteSvg />
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="it-testi-inner-arrow mt-40 d-flex justify-content-between">
                <button className="it-testi-prev" tabIndex={0}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="it-testi-next" tabIndex={0}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="it-testi-inner-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialFive;
