'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';

import travelImg1 from '@/assets/img/home-5/travels/travel-1-3.jpg';
import travelImg2 from '@/assets/img/home-5/travels/travel-1-2.jpg';
import travelImg3 from '@/assets/img/home-5/travels/travel-1-1.jpg';
import travelImg4 from '@/assets/img/home-5/travels/travel-1-4.jpg';

const travelData = [
  {
    id: 1,
    image: travelImg1,
    title: 'Travel Tips',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    btnText: 'See more',
  },
  {
    id: 2,
    image: travelImg2,
    title: 'Travel Advices',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    btnText: 'See more',
  },
  {
    id: 3,
    image: travelImg3,
    title: 'Travel Routes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    btnText: 'See more',
  },
  {
    id: 4,
    image: travelImg4,
    title: 'My Future Plans',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    btnText: 'See more',
  },
  {
    id: 5,
    image: travelImg2,
    title: 'Travel Blogs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    btnText: 'See more',
  },
];

const TravelOne = () => {
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
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="it-travel-feat-area fix pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="swiper-container it-travel-feat-active">
              <Swiper
                modules={[Autoplay]}
                {...sliderOption}
                className="swiper-wrapper"
              >
                {travelData.map((travel) => (
                  <SwiperSlide key={travel.id} className="swiper-slide">
                    <div className="it-travel-feat-item p-relative">
                      <div className="it-travel-feat-thumb fix p-relative mb-25">
                        <Image
                          src={travel.image}
                          alt={travel.title}
                          width={270}
                          height={350}
                          style={{ height: 'auto' }}
                        />
                      </div>
                      <h3 className="it-travel-feat-title text-center">
                        {travel.title}
                      </h3>
                      <div className="it-travel-feat-content z-index text-center">
                        <h3 className="it-travel-feat-title text-white">
                          <Link href="/tour">{travel.title}</Link>
                        </h3>
                        <p>{travel.description}</p>
                        <div className="it-travel-feat-button">
                          <Link href="/tour">{travel.btnText}</Link>
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
export default TravelOne;
