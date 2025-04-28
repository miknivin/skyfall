import Image from 'next/image';
import { RightArrow } from '@/components/svg';
import { IEventDT } from '@/types/event-d-t';

import detailsImg from '@/assets/img/inner-page/events/events-details-2.jpg';

interface IProps {
  event: IEventDT;
}

const EventDetailsArea = ({ event }: IProps) => {
  return (
    <div className="it-events-details-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="it-events-details-thumb text-md-center mr-40">
              <Image
                src={event.detailsImage}
                alt="Details Img"
                width={500}
                height={657}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="it-events-details-content">
              <button className="it-events-details-btn mb-20">
                <i className="fa-solid fa-angles-left"></i>
                All Events
              </button>
              <h3 className="it-section-title mb-25">{event.title}</h3>
              <div className="it-events-details-info mb-30">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-events-details-info-wrap">
                      <div className="it-events-details-info-box d-flex align-items-center">
                        <div className="it-events-details-info-icon">
                          <i className="fa-light fa-calendar"></i>
                        </div>
                        <div className="it-events-details-info-content">
                          <h3 className="it-events-details-info-title">
                            Event Date
                          </h3>
                          <span>
                            {event.eventDate} {event.eventMonth},{' '}
                            {event.eventYear} <br />
                            {event.eventTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="it-events-details-info-wrap">
                      <div className="it-events-details-info-box d-flex align-items-center">
                        <div className="it-events-details-info-icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="it-events-details-info-content">
                          <h3 className="it-events-details-info-title">
                            Event Location
                          </h3>
                          <span>{event.eventAddress}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
              <div className="it-events-btn mb-40">
                <a href="#" className="it-btn-primary">
                  <span>
                    Join Event <RightArrow />
                  </span>
                </a>
              </div>
              <div className="it-events-details-link">
                <div className="it-events-details-link-content d-sm-flex align-items-center">
                  <div className="it-events-details-lunch d-flex align-items-center">
                    <div className="it-events-details-lunch-icon">
                      <i className="fa-light fa-calendar"></i>
                    </div>
                    <span>
                      {event.eventDate} {event.eventMonth} {event.eventYear} @
                      {event.eventTime}
                    </span>
                  </div>
                  <div className="it-events-details-lunch d-flex align-items-center">
                    <div className="it-events-details-lunch-icon">
                      <i className="fa-regular fa-globe"></i>
                    </div>
                    <span>
                      <a href="#">http://example.come</a>
                    </span>
                  </div>
                  <div className="it-events-details-bars">
                    <button>
                      <i className="fa-regular fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-events-details-bottom pt-40">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="it-events-details-content">
                <h3 className="it-section-title mb-20">Explored</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  At volutpat diam ut venenatis tellus in metus. Sem et tortor
                  consequat id porta. Et malesuada fames ac turpis egestas sed.
                  Condimentum vitae sapien pellentesque habitant morbi tristique
                  senectus et. Cras semper auctor neque vitae. Turpis in eu mi
                  bibendum neque. Pellentesque habitant morbi tristique senectus
                  et netus. Ut morbi tincidunt augue interdum velit euismod. At
                  in tellus integer feugiat scelerisque varius morbi. Ultrices
                  neque ornare aenean euismod. Imperdiet proin fermentum leo
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-events-details-thumb d-flex justify-content-end">
                <Image
                  src={detailsImg}
                  alt="Details Img"
                  width={500}
                  height={500}
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetailsArea;
