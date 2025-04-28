import { RightArrowBig } from '../svg';

const workData = [
  {
    id: '01',
    title: 'Create Account',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '02',
    title: 'Select Tour Package',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '03',
    title: 'Travel!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
];

const WorkOne = () => {
  return (
    <div
      className="it-work-area it-work-bg grey-bg pt-120 pb-120"
      style={{ backgroundImage: `url('/assets/img/home-2/work/work-bg.jpg')` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="it-work-title-box text-center">
              <span className="it-section-subtitle">Process</span>
              <h3 className="it-section-title">How It Works?</h3>
            </div>
          </div>
        </div>
        <div className="it-work-wrap p-relative">
          <div className="it-work-shape-box mt-30 d-flex align-items-center justify-content-center">
            <div className="it-work-shape-1 d-none d-lg-block">
              <span>
                <RightArrowBig />
              </span>
            </div>
            <div className="it-work-shape-2 d-none d-lg-block">
              <span>
                <RightArrowBig />
              </span>
            </div>
          </div>
          <div className="row counter-row">
            {workData.map((work) => (
              <div
                key={work.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
              >
                <div className="it-work-item text-center p-relative">
                  <div className="it-work-quantity fix p-relative"></div>
                  <div className="it-work-box">
                    <h3 className="it-work-title">
                      <a href="#">{work.title}</a>
                    </h3>
                    <p>{work.description}</p>
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
export default WorkOne;
