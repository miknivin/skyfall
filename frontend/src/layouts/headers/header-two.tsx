'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import HeaderTop from './header-top';
import MenuItems from './menu-items';
import OffCanvas from '@/components/offcanvas/offcanvas';
import SearchPopUp from '@/components/search-pop/seacrh-pop-up';
import { CartSvg, SearchSvg } from '@/components/svg';

import Logo from '@/assets/img/logo/logo.png';

interface HeaderProps {
  headerLogo?: StaticImageData;
}

const HeaderTwo = ({ headerLogo }: HeaderProps) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);

  useEffect(() => {
    // Sticky Header is displayed after scrolling for 400 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <SearchPopUp isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} />

      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />

      <header>
        <HeaderTop />

        <div
          className={
            isVisible
              ? 'it-header-bottom-area header-sticky'
              : 'it-header-bottom-area'
          }
        >
          <div className="container">
            <div className="it-header-bottom it-header-style-2 it-header-mob-space">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div className="it-main-logo">
                    <Link href="/">
                      <Image
                        src={headerLogo ? headerLogo : Logo}
                        alt="Travello"
                        width={129}
                        height={40}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="it-main-menu text-center">
                    <nav className="it-menu-content">
                      <MenuItems />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                  <div className="it-header-bottom-right d-flex align-items-center justify-content-end">
                    <div className="it-header-right-search d-none d-sm-block">
                      <button
                        className="search-open-btn"
                        onClick={() => setIsPopUpOpen(true)}
                      >
                        <span>
                          <SearchSvg />
                        </span>
                      </button>
                    </div>
                    <div className="it-header-bottom-right-shop d-none d-md-block">
                      <Link href="/cart">
                        <span>
                          <CartSvg />
                        </span>
                      </Link>
                    </div>
                    <div className="it-header-bottom-right-button ml-30">
                      <Link href="/contact" className="it-btn-primary">
                        Contact Us
                      </Link>
                    </div>
                    <div className="it-header-bar-wrap d-xl-none">
                      <button
                        className="it-header-bar it-menu-bar"
                        onClick={() => setIsOffCanvasOpen(true)}
                      >
                        <i className="fa-sharp fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderTwo;
