'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { selectWishlistItems } from '@/redux/selectors/wishlist-selector';
import { toggleWishlistItem } from '@/redux/slices/wishlist-slice';
import { updatePrice } from '@/utils/helper';
import { IProductDT } from '@/types/product-d-t';

const WishlistArea = () => {
  const products = useAppSelector(selectWishlistItems); // Selector to get items from wishlist
  const dispatch = useAppDispatch();

  // Dispatch the action to remove item from wishlist
  const handleToggleWishlist = (product: IProductDT) => {
    dispatch(toggleWishlistItem(product));
  };

  // Dispatch action to add item to cart with initial quantity of 1
  const handleAddToCart = (product: IProductDT, quantity: number = 1) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  return (
    <>
      {products.length === 0 ? (
        <div className="it-error-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="it-error-box text-center">
                  <div className="it-error-content">
                    <h4 className="it-error-title">Your Wishlist is Empty!</h4>
                    <p>
                      But it doesn't have to stay that way. <br /> Browse our
                      collection and find something you love!
                    </p>

                    <div className="it-error-button">
                      <Link className="it-btn-primary" href="/shop">
                        <span>Back to Shop</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="cart-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div
                className="col-12"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-subtotal">Add To Cart</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td className="product-thumbnail">
                              <Link href={`/shop-details/${product.id}`}>
                                <Image
                                  src={product.image}
                                  alt=""
                                  width={44}
                                  height={48}
                                  style={{ height: 'auto' }}
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link href={`/shop-details/${product.id}`}>
                                {product.title}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">
                                ${Math.round(updatePrice(product)).toFixed(2)}
                              </span>
                            </td>
                            <td className="product-subtotal">
                              <button
                                type="button"
                                className="it-btn-primary"
                                onClick={() => handleAddToCart(product)}
                              >
                                <span>Add to Cart</span>
                              </button>
                            </td>
                            <td className="product-remove">
                              <button
                                type="button"
                                onClick={() => handleToggleWishlist(product)}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default WishlistArea;
