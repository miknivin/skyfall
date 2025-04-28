import Image from 'next/image';
import SignUpForm from '../form/sign-up-form';

import signUpImg from '@/assets/img/inner-page/contact/sign-up.jpg';

const SignUpArea = () => {
  return (
    <div className="it-sign-up-area pt-120 pb-120">
      <div className="container">
        <div className="it-sign-up-wrap">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="it-sign-up-left">
                <h4 className="it-sign-up-title mb-25">sign up</h4>
                <SignUpForm />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-sign-up-thumb">
                <Image
                  src={signUpImg}
                  alt="Sign In Img"
                  width={570}
                  height={738}
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
export default SignUpArea;
