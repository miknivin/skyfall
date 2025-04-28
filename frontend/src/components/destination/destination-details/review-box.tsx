import Image from 'next/image';
import TourReviewForm from '@/components/form/tour-review-form';
import { DislikeSvg, LikeSvgTwo } from '@/components/svg';

import avatarImg1 from '@/assets/img/inner-page/discover/client-1-1.jpg';
import avatarImg2 from '@/assets/img/inner-page/discover/client-1-2.jpg';

interface TitleProps {
  title: string;
}

const clientData = [
  {
    id: 1,
    avatar: avatarImg1,
    author: 'Jenny Wilson',
    publishedDate: 'March 8, 2020',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus
                    in metus. Sem et tortor consequat id porta. Et malesuada fames ac turpis egestas`,
  },
  {
    id: 2,
    avatar: avatarImg2,
    author: 'Katy Perry',
    publishedDate: 'January 21, 2022',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus
                    in metus. Sem et tortor consequat id porta. Et malesuada fames ac turpis egestas`,
  },
];

const ReviewBox = ({ title }: TitleProps) => {
  return (
    <>
      <h3 className="it-discover-title mb-35">
        {clientData.length} thoughts on “{title}”
      </h3>
      <div className="it-discover-client-wrap">
        {clientData.map((client) => (
          <div key={client.id} className="it-discover-client-item">
            <div className="it-discover-client-top mb-15 d-flex">
              <div className="it-discover-client-thumb">
                <Image
                  src={client.avatar}
                  alt={client.author}
                  width={80}
                  height={80}
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="it-discover-client-content">
                <div className="it-discover-client-info mb-15 d-flex justify-content-between">
                  <div className="it-discover-client-left d-flex align-items-center">
                    <h3 className="it-discover-client-title">
                      {client.author}
                    </h3>
                    <span className="it-discover-client-meta">
                      {client.publishedDate}
                    </span>
                  </div>
                  <div className="it-discover-client-right">
                    <div className="it-discover-client-notification d-flex align-items-center">
                      <span>Was this review helpful?</span>
                      <div className="it-discover-client-support d-flex align-items-center">
                        <div className="it-discover-client-support-icon">
                          <span>
                            <LikeSvgTwo />
                          </span>
                          <p>7</p>
                        </div>
                        <div className="it-discover-client-support-icon">
                          <span>
                            <DislikeSvg />
                          </span>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>{client.description}</p>
          </div>
        ))}
      </div>
      <h3 className="it-discover-title mb-25">Add a Comment</h3>
      <span>Your email address will not be published.</span>
      <div className="it-discover-reviwe-box mb-30">
        <div className="it-discover-review-form mt-30">
          <TourReviewForm />
        </div>
      </div>
    </>
  );
};
export default ReviewBox;
