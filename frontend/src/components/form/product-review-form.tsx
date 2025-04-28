'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMsg from '../error-msg';

interface FormData {
  yourName: string;
  email: string;
  message: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  yourName: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const ProductReviewForm = () => {
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
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-12 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Your Name*"
              {...register('yourName')}
            />
            <ErrorMsg msg={errors.yourName?.message || ''} />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-12 mb-20">
          <div className="it-contact-input-box">
            <input
              type="email"
              placeholder="Email Address*"
              {...register('email')}
            />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-12 mb-20">
          <div className="it-contact-textarea-box">
            <textarea
              placeholder="write a message...."
              {...register('message')}
            ></textarea>
            <ErrorMsg msg={errors.message?.message || ''} />
          </div>
        </div>
      </div>

      <button type="submit" className="it-btn-primary">
        <span>Send Message</span>
      </button>
    </form>
  );
};
export default ProductReviewForm;
