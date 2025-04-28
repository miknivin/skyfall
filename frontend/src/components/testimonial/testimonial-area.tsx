import Image from 'next/image';
import { testimonialDataSix } from '@/data/testimonial-data';

const TestimonialArea = () => {
  return (
    <div className="it-testimonial-area it-testi-inner-2 pt-120 pb-90">
      <div className="container">
        <div className="row">
          {testimonialDataSix.map((testimonial) => (
            <div key={testimonial.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="it-testi-item">
                <div className="it-testi-dsc p-relative">
                  <p>{testimonial.description}</p>
                </div>
                <div className="it-testi-author-box mb-30 d-flex align-items-center justify-content-center">
                  <div className="it-testi-author-thumb mr-30">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                      />
                    )}
                  </div>
                  <div className="it-testi-author-text">
                    <h3 className="it-testi-author-title">
                      {testimonial.author}
                    </h3>
                    <span className="it-testi-author-desig">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestimonialArea;
