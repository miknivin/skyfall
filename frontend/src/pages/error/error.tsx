import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';
import Image from 'next/image';

import errorImg from '@/assets/img/inner-page/error/thumb-1.png';
import Link from 'next/link';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';

const ErrorMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="OPPS! This page is not found" subtitle="404" />

        <div className="it-error-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-error-wrap">
                  <div className="it-error-thumb text-center mb-50">
                    <Image
                      src={errorImg}
                      alt="Error Img"
                      width={694}
                      height={439}
                      style={{ height: 'auto' }}
                    />
                  </div>
                  <div className="it-error-content d-md-flex align-items-center justify-content-between">
                    <h4 className="it-error-title">
                      <i>Lost in the fields? </i>
                      Let us <br />
                      help you find your way back.
                    </h4>
                    <Link className="it-btn-primary" href="/">
                      Back homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default ErrorMain;
