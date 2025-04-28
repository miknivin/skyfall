import SummeryBox from './summery-box';
import BookingForm from '../form/booking-form';

const BookingArea = () => {
  return (
    <section className="section-b-space bg-inner animated-section pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="guest-detail">
              <h2>Traveller Information</h2>
              <BookingForm />
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
export default BookingArea;
