import { LocationSvg, MailSvg, PhoneSvg } from '@/components/svg';

const HeaderTopTwo = () => {
  return (
    <div className="it-header-top-area it-header-style-5 black-bg">
      <div className="container">
        <div className="it-header-top">
          <div className="row align-items-center">
            <div className="col-xl-9 col-lg-6 col-md-6 col-sm-6">
              <div className="it-header-top-left">
                <ul>
                  <li className="d-none d-xl-inline-block">
                    <span>
                      <PhoneSvg />
                    </span>
                    <a href="tel:000967-237-96">(000) 967-237-96</a>
                  </li>
                  <li>
                    <span>
                      <MailSvg />
                    </span>
                    <a href="mailto:touresinfo@gmail.com">
                      touresinfo@gmail.com
                    </a>
                  </li>
                  <li className="d-none d-xl-inline-block">
                    <span>
                      <LocationSvg />
                    </span>
                    <a href="https://www.google.com/maps">
                      290 Grand AvenueMaitland, FL 32751
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="it-header-top-right d-flex align-items-center justify-content-end">
                <div className="it-header-top-right-social p-relative text-end">
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-skype"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTopTwo;
