'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/redux/rootReducer';

const SummeryBox = () => {
  const promoDiscount: number = 110;
  const taxFee: number = 150;
  const {
    tour,
    checkIn,
    adultTickets,
    kidTickets,
    childTickets,
    additionalGuide,
    internet,
    photography,
    totalCost,
    isBookingClicked,
  } = useAppSelector((state: RootState) => state.booking);

  return (
    <>
      {isBookingClicked ? (
        <div className="summery-box">
          <h2>booking summary</h2>
          {tour && (
            <div className="hotel-section">
              <div className="hotel-img">
                <Image
                  src={tour.image}
                  alt="Tour Img"
                  width={186}
                  height={113}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="hotel-detail">
                <h6>{tour.title}</h6>
                <p>{tour.address}</p>
              </div>
            </div>
          )}
          <div className="summery-section">
            <div className="box">
              <div className="left">
                <div className="up">
                  <h5>
                    Check in:{' '}
                    {checkIn
                      ? new Date(checkIn).toLocaleDateString()
                      : 'Not Selected'}
                  </h5>
                  <h5>Adult Tickets: {adultTickets}</h5>
                  <h5>Kid Tickets: {kidTickets}</h5>
                  <h5>Child Tickets: {childTickets}</h5>
                  <h5>Additional Guide: {additionalGuide ? 'Yes' : 'No'}</h5>
                  <h5>Internet: {internet ? 'Yes' : 'No'}</h5>
                  <h5>Photography: {photography ? 'Yes' : 'No'}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="summery-section">
            <div className="payment-details">
              <h5>payment details</h5>
              <table>
                <tbody>
                  <tr>
                    <td>base price</td>
                    <td>${totalCost}</td>
                  </tr>
                  <tr>
                    <td>promo discount</td>
                    <td>
                      {promoDiscount !== 0
                        ? `- $${promoDiscount}`
                        : `${promoDiscount}`}
                    </td>
                  </tr>
                  <tr>
                    <td>tax &amp; service fees</td>
                    <td>+ ${taxFee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="summery-section">
            <div className="payment-details">
              <table>
                <tbody>
                  <tr>
                    <td>payable amount</td>
                    <td className="amount">
                      ${totalCost - promoDiscount + taxFee}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="summery-box">
          <div className="it-error-area pt-50 pb-50">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="it-error-content text-center">
                    <h1 className="summery-title">
                      You haven't booked any package Yet!
                    </h1>
                    <p>
                      But it doesn't have to stay that way. <br /> Browse our
                      tour packages and find something you love!
                    </p>
                    <Link className="it-btn-primary" href="/tour">
                      Back To Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SummeryBox;
