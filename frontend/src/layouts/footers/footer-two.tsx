import Image from 'next/image';
import Link from 'next/link';

import shapeImg1 from '@/assets/img/home-4/footer/map.png';
import shapeImg2 from '@/assets/img/home-1/footer/right-tree.png';
import Logo from '@/assets/img/logo/logo.png';
import img1 from '@/assets/img/footer/thumb-4-1.png';
import img2 from '@/assets/img/footer/thumb-4-2.png';
import img3 from '@/assets/img/footer/thumb-4-3.png';
import img4 from '@/assets/img/footer/thumb-4-4.png';
import img5 from '@/assets/img/footer/thumb-4-5.png';
import img6 from '@/assets/img/footer/thumb-4-6.png';

const galleryData = [img1, img2, img3, img4, img5, img6];

const FooterTwo = () => {
  return (
    <footer>
      <div className="it-footer-area it-footer-4 p-relative pt-120 pb-135 black-bg fix">
        <div className="it-footer-4-shape-1 d-none d-xxl-block">
          <Image src={shapeImg1} alt="Shape Img" width={181} height={184} />
        </div>
        <div className="it-footer-shape-2">
          <Image src={shapeImg2} alt="Shape Img" width={452} height={497} />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="it-footer-widget footer-col-1 mb-60">
                <div className="it-footer-logo mb-35">
                  <Link href="/">
                    <Image src={Logo} alt="Travello" width={129} height={40} />
                  </Link>
                </div>
                <div className="it-footer-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doeiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut{' '}
                  </p>
                  <div className="it-footer-social">
                    <a href="#">
                      <i className="flaticon-facebook-app-symbol"></i>
                    </a>
                    <a href="#">
                      <i className="flaticon-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="flaticon-skype"></i>
                    </a>
                    <a href="#">
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="it-footer-widget footer-col-2 mb-60">
                <h3 className="it-footer-widget-title mb-55">Company:</h3>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Blog update</a>
                    </li>
                    <li>
                      <a href="#">Our services</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <div className="it-footer-widget footer-col-3 mb-60">
                <h3 className="it-footer-widget-title mb-55">Quick Links:</h3>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">Privacy & policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & conditions</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Hydropower Plants</a>
                    </li>
                    <li>
                      <a href="#">Customer support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <div className="it-footer-widget p-relative footer-col-4 mb-60">
                <h3 className="it-footer-widget-title mb-55">GALLERY</h3>
                <div className="it-footer-gallery-box">
                  <div className="row gx-5">
                    {galleryData.map((img, index) => (
                      <div key={index} className="col-md-4 col-4">
                        <div className="it-footer-thumb mb-10">
                          <Image
                            src={img}
                            alt="Footer Img"
                            width={80}
                            height={80}
                            style={{ height: 'auto' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-style-4 z-index">
        <div className="container">
          <div className="it-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-5">
                <div className="it-copyright-text text-center text-lg-start">
                  <p>
                    Copyright © 2024{' '}
                    <span>
                      <a href="">Travello</a>
                    </span>{' '}
                    All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                <div className="it-copyright-menu d-flex justify-content-lg-end">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/destination">Destinations</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterTwo;
