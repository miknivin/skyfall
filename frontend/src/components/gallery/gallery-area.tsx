'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import galleryImg1 from '@/assets/img/inner-page/gallery/gallery-img-1.jpg';
import galleryImg2 from '@/assets/img/inner-page/gallery/gallery-img-2.jpg';
import galleryImg3 from '@/assets/img/inner-page/gallery/gallery-img-3.jpg';
import galleryImg4 from '@/assets/img/inner-page/gallery/gallery-img-4.jpg';
import galleryImg5 from '@/assets/img/inner-page/gallery/gallery-img-5.jpg';
import galleryImg6 from '@/assets/img/inner-page/gallery/gallery-img-6.jpg';
import galleryImg7 from '@/assets/img/inner-page/gallery/gallery-img-7.jpg';
import galleryImg8 from '@/assets/img/inner-page/gallery/gallery-img-8.jpg';
import galleryImg9 from '@/assets/img/inner-page/gallery/gallery-img-9.jpg';

const imageData = [
  { src: galleryImg1.src },
  { src: galleryImg2.src },
  { src: galleryImg3.src },
  { src: galleryImg4.src },
  { src: galleryImg5.src },
  { src: galleryImg6.src },
  { src: galleryImg7.src },
  { src: galleryImg8.src },
  { src: galleryImg9.src },
];

const GalleryArea = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Handler for image gallery
  const handleImageClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imageData}
        index={currentIndex}
        styles={{
          container: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      />

      <div className="it-gallery-area pt-150 pb-150">
        <div className="container">
          <div className="row">
            {imageData.map((image, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="it-gallery-item">
                  <div className="it-gallery-thumb">
                    <Image
                      src={image.src}
                      alt="Gallery Img"
                      width={370}
                      height={370}
                      style={{ height: 'auto' }}
                    />
                    <div className="it-gallery-thumb-icon">
                      <Link
                        className="popup-image"
                        href="#"
                        onClick={(e) => handleImageClick(index, e)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default GalleryArea;
