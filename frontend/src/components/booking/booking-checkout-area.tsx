'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import SummeryBox from './summery-box';

import cardImg from '@/assets/img/inner-page/tour/card.png';
import cvvImg from '@/assets/img/inner-page/tour/cvv.png';

const faqData = [
  {
    id: 'a',
    btnText: 'Direct Bank Transfer',
    description: (
      <div className="custom-payment">
        <form>
          <div className="form-group pb-10">
            <label htmlFor="name">name on card</label>
            <input
              className="form-control-2"
              autoComplete=""
              id="name"
              type="text"
            />
          </div>
          <div className="form-group  p-relative pb-10">
            <label htmlFor="number">card number</label>
            <input
              className="form-control-2"
              autoComplete=""
              id="number"
              type="text"
            />
            <Image
              src={cardImg}
              alt="Card Img"
              className="card-img"
              width={140}
              height={23}
            />
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="month">month</label>
              <select id="month" autoComplete="" className="form-control-2">
                <option>Month...</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="year">year</label>
              <select id="year" autoComplete="" className="form-control-2">
                <option>Year...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group p-relative col-md-4">
              <label htmlFor="cvv">cvv</label>
              <input
                autoComplete=""
                maxLength={4}
                className="form-control-2"
                id="cvv"
                type="password"
              />
              <Image
                src={cvvImg}
                className="cvv-img"
                alt="Cvv Img"
                width={140}
                height={23}
              />
            </div>
          </div>
        </form>
      </div>
    ),
  },
  {
    id: 'b',
    btnText: 'Cheque Payment',
    description: (
      <p>
        Please send your cheque to Store Name, Store Street, Store Town, Store
        State / County, Store Postcode.
      </p>
    ),
  },
  {
    id: 'c',
    btnText: 'PayPal',
    description: (
      <p>
        Pay via PayPal; you can pay with your credit card if you don’t have a
        PayPal account.
      </p>
    ),
  },
];

const BookingCheckoutArea = () => {
  return (
    <section className="section-b-space bg-inner animated-section pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="payment-method">
              <Accordion
                className="accordion"
                preExpanded={['a']}
                allowZeroExpanded
              >
                {faqData.map((item) => (
                  <AccordionItem
                    key={item.id}
                    className="accordion-item"
                    uuid={item.id}
                  >
                    <AccordionItemHeading className="accordion-header">
                      <AccordionItemButton className="accordion-button">
                        {item.btnText}
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <div className="accordion-body">{item.description}</div>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="order-button-payment mt-20">
                <button className="it-btn-primary" type="submit">
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 booking-order">
            <SummeryBox />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookingCheckoutArea;
