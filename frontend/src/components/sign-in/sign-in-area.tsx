import Image from 'next/image';
import SignInForm from '../form/sign-in-form';

import signInImg from '@/assets/img/inner-page/contact/sign-up.jpg';

const SignInArea = () => {
  return (
    <div className="it-sign-up-area pt-120 pb-120">
      <div className="container">
        <div className="it-sign-up-wrap">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="it-sign-up-left">
                <h4 className="it-sign-up-title mb-25">sign in</h4>
                <SignInForm />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-sign-up-thumb">
                <Image
                  src={signInImg}
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
export default SignInArea;
