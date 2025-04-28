'use client';

import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from '@/redux/slices/cart-slice';
import {
  selectCartItems,
  selectCartTotal,
} from '@/redux/selectors/cart-selector';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';

const CartArea = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItems); // Selector to get cart item
  const cartTotal = useAppSelector(selectCartTotal); // Selector to get cart total

  // Dispatch the action to increase the quantity
  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  // Dispatch the action to decrease the quantity
  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  // Dispatch the action to remove all products from cart
  const handleRemove = (id: number, title: string) => {
    dispatch(
      removeItemFromCart({
        id: id,
        title: title,
      })
    );
  };

  // Dispatch the action to remove all products from cart
  const handleClearCart = () => {
    if (typeof window !== 'undefined') {
      const confirmed = window.confirm(
        'Are you sure you want to clear the cart?'
      );
      if (confirmed) {
        dispatch(clearCart());
        toast.success('Cart cleared successfully!', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="it-error-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="it-error-content text-center">
                  <h5 className="it-error-title">Your Cart is Empty</h5>
                  <p>
                    But it doesn't have to stay that way. <br /> Browse our
                    collection and find something you love!
                  </p>
                  <Link className="it-btn-primary" href="/shop">
                    Back To Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="cart-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <Link href={`/shop-details/${item.id}`}>
                                {item.image && (
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={44}
                                    height={48}
                                    style={{ height: 'auto' }}
                                  />
                                )}
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link href={`/shop-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">
                                $
                                {Math.round(
                                  updatePrice(item as IProductDT)
                                ).toFixed(2)}
                              </span>
                            </td>
                            <td className="product-quantity">
                              <span
                                className="it-cart-minus cart-minus"
                                onClick={() => handleDecrement(item.id)}
                              >
                                -
                              </span>
                              <input
                                className="cart-input"
                                type="text"
                                value={item.quantity}
                                readOnly
                              />
                              <span
                                className="it-cart-plus cart-plus"
                                onClick={() => handleIncrement(item.id)}
                              >
                                +
                              </span>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">
                                $
                                {(
                                  Math.round(updatePrice(item as IProductDT)) *
                                  item.quantity
                                ).toFixed(2)}
                              </span>
                            </td>
                            <td className="product-remove">
                              <a
                                href="#"
                                onClick={() =>
                                  handleRemove(item.id, item.title)
                                }
                              >
                                <i className="fa fa-times"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input
                            id="coupon_code"
                            className="input-text"
                            name="coupon_code"
                            placeholder="Coupon code"
                            type="text"
                          />
                          <button
                            className="it-btn-primary"
                            name="apply_coupon"
                            type="submit"
                          >
                            <span>Apply coupon</span>
                          </button>
                        </div>
                        <div className="coupon2">
                          <button
                            className="it-btn-primary"
                            onClick={() => handleClearCart()}
                          >
                            <span>Clear Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-md-5 ">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>
                            Subtotal <span>${cartTotal.toFixed(2)}</span>
                          </li>
                          <li>
                            Total <span>${cartTotal.toFixed(2)}</span>
                          </li>
                        </ul>
                        <Link className="it-btn-primary" href="/checkout">
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
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
export default CartArea;
