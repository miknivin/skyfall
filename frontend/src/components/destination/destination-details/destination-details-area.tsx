import Image from 'next/image';
import { IDestinationDT } from '@/types/destination-d-t';
import ReviewBox from './review-box';
import Sidebar from './sidebar';

import discoverImg1 from '@/assets/img/inner-page/discover/discover-2.jpg';
import discoverImg2 from '@/assets/img/inner-page/discover/discover-3.jpg';

interface IProps {
  destination: IDestinationDT;
}

const DestinationDetailsArea = ({ destination }: IProps) => {
  return (
    <div className="it-discover-area pt-120 pb-120p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="it-discover-thumb mb-30">
              <Image
                src={destination.detailsImg}
                alt={destination.title}
                width={770}
                height={451}
                style={{ height: 'auto' }}
              />
            </div>
            <h3 className="it-section-title mb-40" style={{ fontSize: '40px' }}>
              Explore the Beautiful Charm of {destination.title}
            </h3>
            <div className="it-discover-dsc mb-45">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. At
                volutpat diam ut venenatis tellus in metus. Sem et tortor
                consequat id porta. Et malesuada fames ac turpis egestas sed.
                Condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et. Cras semper auctor neque vitae. Turpis in eu mi
                bibendum neque. Pellentesque habitant morbi tristique senectus
                et netus. Ut morbi tincidunt augue interdum velit euismod. At in
                tellus integer feugiat scelerisque varius morbi.
              </p>
            </div>
            <div className="it-discover-thumb-wrap">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-discover-thumb">
                    <Image
                      src={discoverImg1}
                      alt="Discover Img"
                      width={370}
                      height={450}
                      style={{ height: 'auto' }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-discover-thumb custom-mt">
                    <Image
                      src={discoverImg2}
                      alt="Discover Img"
                      width={370}
                      height={450}
                      style={{ height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="it-discover-dsc mb-45 mt-45">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. At
                volutpat diam ut venenatis tellus in metus. Sem et tortor
                consequat id porta. Et malesuada fames ac turpis egestas sed.
                Condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et.
              </p>
            </div>

            <h3 className="it-discover-title mb-35">Location</h3>
            <div className="it-discover-maps mb-35">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121914.86196405679!2d-74.07886878452959!3d40.72084424392851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713501285528!5m2!1sen!2sbd"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ReviewBox title={destination.title} />
          </div>
          <div className="col-xl-4 col-lg-4">
            <Sidebar />
          </div>
        </div>
        <div className="it-pagination pb-100"></div>
      </div>
    </div>
  );
};
export default DestinationDetailsArea;
