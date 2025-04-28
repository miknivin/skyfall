'use client';

import Link from 'next/link';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ErrorMsg from '../error-msg';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  specialRequest?: string;
  promoCode?: string;
}

// Create a validation schema using yup
// Define validation schema
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobileNo: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    .required('Mobile number is required'),
  specialRequest: yup.string().optional(),
  promoCode: yup.string().optional(),
});

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-group">
        <div className="row">
          <div className="col first-name">
            <label>first name</label>
            <input
              id="firstName"
              className="form-control"
              placeholder="First name"
              type="text"
              {...register('firstName')}
            />
            <ErrorMsg msg={errors.firstName?.message || ''} />
          </div>
          <div className="col">
            <label>last name</label>
            <input
              id="lastName"
              className="form-control"
              placeholder="Last name"
              type="text"
              {...register('lastName')}
            />
            <ErrorMsg msg={errors.lastName?.message || ''} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          className="form-control"
          placeholder="Enter email"
          type="email"
          {...register('email')}
        />
        <ErrorMsg msg={errors.email?.message || ''} />
        <small id="emailHelp" className="form-text text-muted">
          Booking confirmation will be sent to this email ID.
        </small>
      </div>
      <div className="form-group">
        <label>contact info</label>
        <input
          id="mobile-no"
          className="form-control"
          type="tel"
          {...register('mobileNo')}
        />
        <ErrorMsg msg={errors.mobileNo?.message || ''} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">special request</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="e.g.. early check-in, airport transfer"
          {...register('specialRequest')}
        ></textarea>
        <ErrorMsg msg={errors.specialRequest?.message || ''} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">have a coupon code?</label>
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Promo Code"
            type="text"
            {...register('promoCode')}
          />
          <ErrorMsg msg={errors.promoCode?.message || ''} />
          <div className="input-group-prepend">
            <span className="input-group-text">apply</span>
          </div>
        </div>
      </div>
      <div className="submit-btn">
        <Link href="/booking-checkout">
          <button className="it-btn-primary" type="submit">
            pay now
          </button>
        </Link>
      </div>
    </form>
  );
};
export default BookingForm;
