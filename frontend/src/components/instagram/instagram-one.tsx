'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';

import instImg1 from '@/assets/img/home-5/instagram/insta-1.jpg';
import instImg2 from '@/assets/img/home-5/instagram/insta-2.jpg';
import instImg3 from '@/assets/img/home-5/instagram/insta-3.jpg';
import instImg4 from '@/assets/img/home-5/instagram/insta-4.jpg';
import instImg5 from '@/assets/img/home-5/instagram/insta-5.jpg';

const instagramData = [
  { id: 1, image: instImg1, link: 'https://www.instagram.com/' },
  { id: 2, image: instImg2, link: 'https://www.instagram.com/' },
  { id: 3, image: instImg3, link: 'https://www.instagram.com/' },
  { id: 4, image: instImg4, link: 'https://www.instagram.com/' },
  { id: 5, image: instImg5, link: 'https://www.instagram.com/' },
  { id: 6, image: instImg2, link: 'https://www.instagram.com/' },
];

const InstagramOne = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1400': {
        slidesPerView: 5,
      },
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
  };
  return (
    <div className="it-instagram-area pb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="swiper-container it-insta-active">
              <Swiper
                modules={[Autoplay]}
                {...sliderOption}
                className="swiper-wrapper"
              >
                {instagramData.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="it-instagram-item">
                      <div className="it-instagram-thumb p-relative">
                        <Image
                          src={item.image}
                          alt="Instagram Img"
                          width={350}
                          height={350}
                          style={{ height: 'auto' }}
                        />
                        <div className="it-instagram-icon">
                          <Link href={item.link} target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
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
export default InstagramOne;
