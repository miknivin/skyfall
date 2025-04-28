import Counter from './counter-item/counter-item';
import { FunFactStar } from '../svg';

const counterData = [
  {
    id: 1,
    countNum: 835,
    countSubtext: '+',
    countTitle: 'Total Donations',
  },
  {
    id: 2,
    countNum: 6246,
    countSubtext: '+',
    countTitle: 'Campaigns Closed',
  },
  {
    id: 3,
    countNum: 2000,
    countSubtext: '+',
    countTitle: 'Happy People',
  },
  {
    id: 4,
    countNum: 600,
    countSubtext: '+',
    countTitle: 'Our Volunteers',
  },
];

const FunFactOne = () => {
  return (
    <div className="it-funfact-area theme-bg-2 pt-30 pb-30">
      <div className="container">
        <div className="it-funfact-wrap">
          <div className="row">
            {counterData.map((item, index) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
              >
                <div className="it-funfact-item d-flex align-items-center justify-content-sm-center">
                  <div className="it-funfact-text">
                    <h3 className="it-funfact-number">
                      <Counter
                        start={0}
                        end={item.countNum}
                        duration={2}
                        counterSubText={item.countSubtext}
                      />
                    </h3>
                    <p>{item.countTitle}</p>
                  </div>
                  <div className="it-funfact-icon">
                    <span>
                      <FunFactStar />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunFactOne;
