'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { RatingStarSvg } from '@/components/svg';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';
import ProductReviewForm from '@/components/form/product-review-form';

import avatar from '@/assets/img/inner-page/blog/avatar-1-2.png';

interface ShopDetailsProps {
  product: IProductDT;
}

const ShopDetailsArea = ({ product }: ShopDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  // handler to increment quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // handler to Decrement quantity
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Handler to add item to cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart({ product: product, quantity }));
      setQuantity(1);
    }
  };

  return (
    <div className="it-shop-details__area pt-120 pb-120">
      <div className="container">
        <div className="it-shop-details__top-wrap">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="it-shop-details__thumb-box">
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-shop-details__right-wrap">
                <h3 className="it-shop-details__title-sm">{product.title}</h3>
                <div className="it-shop-details__price">
                  <div className="it-shop-details__ratting">
                    <span>
                      <RatingStarSvg />
                    </span>
                    <span>
                      <RatingStarSvg />
                    </span>
                    <span>
                      <RatingStarSvg />
                    </span>
                    <span>
                      <RatingStarSvg />
                    </span>
                    <span>
                      <RatingStarSvg />
                    </span>
                    <span className="review-text">
                      ({product.reviewCount} Customer reviews)
                    </span>
                  </div>
                  <span>
                    ${(Math.round(updatePrice(product)) * quantity).toFixed(2)}{' '}
                    {product.badgeTitle && (
                      <del>${product.price.toFixed(2)}</del>
                    )}
                  </span>
                </div>
                <div className="it-shop-details__text pb-20">
                  <p>{product.description}</p>
                </div>
                <div className="it-shop-details__quantity-wrap">
                  <div className="it-shop-details__quantity-box d-flex align-items-center">
                    <span>Quantity</span>
                    <div className="it-shop-details__quantity">
                      <div
                        className="it-cart-minus"
                        onClick={() => handleDecrement()}
                      >
                        <i className="fal fa-minus"></i>
                      </div>
                      <input
                        type="text"
                        id="quantity"
                        min="1"
                        value={quantity}
                        readOnly
                      />
                      <div
                        className="it-cart-plus"
                        onClick={() => handleIncrement()}
                      >
                        <i className="fal fa-plus"></i>
                      </div>
                    </div>
                    <div className="it-shop-details__btn">
                      <button
                        className="it-btn-primary"
                        onClick={() => {
                          handleAddToCart();
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <div className="it-shop-details__text-2 pb-15">
                    <span>
                      <strong>SKU:</strong> {product.sku}
                    </span>
                    <span>
                      <strong>Category: </strong>
                      {product.category}
                    </span>
                    <span>
                      <strong>Tag: </strong>
                      {product.tag}
                    </span>
                  </div>
                  <div className="it-shop-details__social">
                    <span>Share:</span>
                    {product.socials.map((social, index) => (
                      <Link key={index} href={social.link}>
                        <i className={social.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12">
            <div className="it-shop-details__text-box grey-bg mb-50">
              <h5 className="it-section-title-sm">Our Description</h5>
              <p className="pt-10 pb-20">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
              <p className="mb-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga similique sunt in
                culpa qui officia deserunt
              </p>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="it-shop-details__review-box mb-50">
              <h4 className="postbox__details-title">Client Reviews</h4>
              <div className="it-shop-details__review pt-10 d-flex align-items-start">
                <div className="it-shop-details__review-thumb">
                  <Image
                    src={avatar}
                    alt="Reviewer Avatar"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="it-shop-details__author-info">
                  <span>
                    <strong>by David Parker / </strong>March 28, 2024
                  </span>
                  <div className="it-shop-details__star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>
                    Elementum tempus egestas sed sed risus pretium quam
                    vulputate dignissim. Dictum at tempor commodo ullamcorper.
                    Sed risus pretium quam vulputate dignissim suspendisse.
                    Habitasse platea dictumst quisque{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="it-shop-details-contact-wrap">
              <div className="it-contact-wrap">
                <h4 className="postbox__details-title mb-20">
                  Add Your Review
                </h4>
                <div className="it-contact-form-box">
                  <ProductReviewForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopDetailsArea;
