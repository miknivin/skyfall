import FaqOne from '../../faq/item/faq-one';

import faqImg from '@/assets/img/inner-page/discover/accordian-1-1.jpg';

const faqData = [
  {
    id: 1,
    uuid: 'a',
    title: 'Arrival in Phuket and Patong Beach Exploration',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua At volutpat diam ut venenatis
                    tellus inmetus. Sem et tortor consequat id porta`,
    image: faqImg,
  },
  {
    id: 2,
    uuid: 'b',
    title: 'Phi Phi Islands Snorkeling Adventure',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua At volutpat diam ut venenatis
                    tellus inmetus. Sem et tortor consequat id porta`,
    image: faqImg,
  },
  {
    id: 3,
    uuid: 'c',
    title: 'Phang Nga Bay Cruise and Cultural Immersion',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua At volutpat diam ut venenatis
                    tellus inmetus. Sem et tortor consequat id porta`,
    image: faqImg,
  },
  {
    id: 4,
    uuid: 'd',
    title: 'Leisure Day and Departure',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua At volutpat diam ut venenatis
                    tellus inmetus. Sem et tortor consequat id porta`,
    image: faqImg,
  },
];

const TourDetailsFaq = () => {
  return (
    <div className="it-faq-area p-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-faq-wrap">
              <div className="it-custom-accordion it-custom-accordion-style-3">
                <FaqOne faqs={faqData} preExpand="a" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourDetailsFaq;
