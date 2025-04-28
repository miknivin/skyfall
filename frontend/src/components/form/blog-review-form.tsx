'use client';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ErrorMsg from '../error-msg';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const BlogReviewForm = () => {
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
      <div className="row">
        <div className="col-xl-6">
          <div className="postbox-review-input">
            <input
              type="text"
              placeholder="first name:"
              {...register('firstName')}
            />
            <ErrorMsg msg={errors.firstName?.message || ''} />
            <input
              type="email"
              placeholder="email address:"
              {...register('email')}
            />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="postbox-review-input">
            <input
              type="text"
              placeholder="last name:"
              {...register('lastName')}
            />
            <ErrorMsg msg={errors.lastName?.message || ''} />
            <input type="text" placeholder="Phone:" {...register('phone')} />
            <ErrorMsg msg={errors.phone?.message || ''} />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="postbox-review-message">
            <textarea
              id="message"
              cols={30}
              rows={10}
              placeholder="write here..."
              {...register('message')}
            ></textarea>
            <ErrorMsg msg={errors.message?.message || ''} />
          </div>
        </div>
      </div>
      <div className="postbox-review-button mt-30">
        <button type="submit" className="it-btn-primary">
          Submit Comments
        </button>
      </div>
    </form>
  );
};
export default BlogReviewForm;
