import Image from 'next/image';
import { IBlogDT } from '@/types/blog-d-t';
import BlogSidebar from '../sidebar';
import BlogReviewForm from '@/components/form/blog-review-form';

import avatar1 from '@/assets/img/inner-page/blog/avatar-1-1.png';
import avatar2 from '@/assets/img/inner-page/blog/avatar-1-2.png';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const commentData = [
  {
    id: 1,
    avatar: avatar1,
    author: 'Jenny Wilson',
    commentedTime: '19 June 2024',
    rating: '4.8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.',
  },
  {
    id: 2,
    avatar: avatar2,
    author: 'Marvin McKinney',
    commentedTime: '21 November 2024',
    rating: '4.7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit.',
  },
];

const BlogDetailsArea = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="postbox-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="postbox-wrapp pr-40">
              <article className="postbox-item">
                <div className="postbox-thumb mb-35">
                  <Image
                    src={blog.detailsImg}
                    alt="Details Img"
                    width={770}
                    height={400}
                    style={{ height: 'auto' }}
                  />
                </div>

                <div className="postbox-meta mb-30">
                  <span>
                    <i className="fa-solid fa-calendar-days"></i>{' '}
                    {blog.publishedDate}
                  </span>
                  <span>
                    <i className="fa-regular fa-messages"></i> Comment (
                    {blog.commentCount})
                  </span>
                </div>
                <div className="postbox-content">
                  <h3 className="postbox-title mb-15">
                    <a href="#">{blog.title}</a>
                  </h3>
                  <div className="postbox-dsc mb-45">
                    <p>{blog.description}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                  </div>
                  <div className="postbox-blookquote theme-bg mb-45">
                    <span>
                      “Educational Strategies: We delve into effective teaching
                      and learning strategies, instructional method, &
                      innovative approaches to engage students and enhance
                      learning ”.
                    </span>
                  </div>
                  <h3 className="postbox-title mb-15">
                    <a href="#">Advice to Grow Businesses</a>
                  </h3>
                  <div className="postbox-dsc mb-45">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                  </div>
                </div>

                <div className="postbox-tag-box grey-bg mb-45">
                  <div className="row">
                    <div className="col-xl-7">
                      <div className="postbox-tag d-flex align-items-center">
                        <h3 className="postbox-tag-title">Tags:</h3>
                        <div className="postbox-tag-content">
                          <a href="#">Travels</a>
                          <a href="#">Natural</a>
                          <a href="#">Business</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="postbox-share d-flex align-items-center justify-content-xl-end">
                        <h3 className="postbox-tag-title">Share:</h3>
                        <div className="postbox-share-content">
                          <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="postbox-comment mb-45">
                  <h3 className="postbox-comment-title mb-25">
                    comment ({commentData.length})
                  </h3>
                  {commentData.map((item) => (
                    <div key={item.id} className="postbox-comment-item">
                      <div className="postbox-comment-content mb-25 d-sm-flex align-items-center justify-content-between">
                        <div className="postbox-comment-user d-flex align-items-center">
                          <div className="postbox-user-thumb">
                            <Image
                              src={item.avatar}
                              alt={item.author}
                              width={80}
                              height={80}
                            />
                          </div>
                          <div className="postbox-user-info">
                            <h4 className="user-title">{item.author}</h4>
                            <span>{item.commentedTime}</span>
                          </div>
                        </div>
                        <div className="postbox-review">
                          <h4 className="postbox-rating-title">Rating:</h4>
                          <div className="postbox-rating">
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-text">({item.rating})</span>
                          </div>
                        </div>
                      </div>
                      <div className="postbox-comment-text">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="postbox-review-form">
                  <h4 className="postbox-review-title mb-30">leave a review</h4>
                  <BlogReviewForm />
                </div>
              </article>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsArea;
