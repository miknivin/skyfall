'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

import shapeImg from '@/assets/img/inner-page/video/inn-rocket.png';

const VideoTwo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div
      className="it-video-area inner-video-style it-video-overlay fix p-relative pt-150 pb-150"
      style={{
        backgroundImage: `url('/assets/img/inner-page/video/video-bg.jpg')`,
      }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="PO_fBTkoznc"
        onClose={closeModal}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="it-video-content z-index">
              <h3 className="it-section-title text-white mb-10">
                Ready to travel with real adventure and enjoy natural
              </h3>
              <p className="text-white mb-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="it-video-button">
                <Link href="/contact" className="it-btn-secondary">
                  Start Booking
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="it-video-right p-relative z-index d-flex align-items-center justify-content-center">
              <div className="it-video-icon">
                <Link
                  href="#"
                  className="popup-video"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
              <div className="it-video-shape d-none d-xxl-block">
                <Image
                  src={shapeImg}
                  alt="Shape Img"
                  width={313}
                  height={311}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoTwo;
