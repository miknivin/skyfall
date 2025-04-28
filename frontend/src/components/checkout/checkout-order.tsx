'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useAppSelector } from '@/hooks/redux-hooks';
import {
  selectCartItems,
  selectCartTotal,
} from '@/redux/selectors/cart-selector';
import { updatePrice } from '@/utils/helper';
import { IProductDT } from '@/types/product-d-t';

const faqs = [
  {
    id: 'a',
    btnText: 'Direct Bank Transfer',
    description:
      'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.',
  },
  {
    id: 'b',
    btnText: 'Cheque Payment',
    description:
      'Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
  },
  {
    id: 'c',
    btnText: 'PayPal',
    description:
      'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.',
  },
];

const CheckoutOrder = () => {
  const cartItems = useAppSelector(selectCartItems); // Selector to get cart items
  const cartTotal = useAppSelector(selectCartTotal); // Selector to get get cart total
  const [shippingCost, setShippingCost] = useState<number>(0);

  const orderTotal = cartTotal + shippingCost;

  // handler for calculating shipping cost
  const handleShippingChange = (cost: number) => {
    setShippingCost(cost);
  };

  return (
    <div className="your-order mb-30 ">
      <h3>Your order</h3>
      <div className="your-order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <tr key={item.id} className="cart_item">
                <td className="product-name">
                  {item.title}{' '}
                  <strong className="product-quantity">
                    {' '}
                    × {item.quantity}
                  </strong>
                </td>
                <td className="product-total">
                  <span className="amount">
                    $
                    {(
                      Math.round(updatePrice(item as IProductDT)) *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Cart Subtotal</th>
              <td>
                <span className="amount">${cartTotal.toFixed(2)}</span>
              </td>
            </tr>
            <tr className="shipping">
              <th>Shipping</th>
              <td>
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="shipping"
                      onChange={() => handleShippingChange(7)}
                    />
                    <label>
                      Flat Rate: <span className="amount">$7.00</span>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="shipping"
                      onChange={() => handleShippingChange(0)}
                    />
                    <label>Free Shipping:</label>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="order-total">
              <th>Order Total</th>
              <td>
                <strong>
                  <span className="amount">${orderTotal.toFixed(2)}</span>
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="payment-method checkout-method">
        <Accordion className="accordion" preExpanded={['a']} allowZeroExpanded>
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              className="accordion-item"
              uuid={item.id}
            >
              <AccordionItemHeading className="accordion-header">
                <AccordionItemButton className="accordion-button">
                  {item.btnText}
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel>
                <div className="accordion-body">{item.description}</div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="order-button-payment mt-20">
          <button
            className="it-btn-primary d-flex justify-content-center align-items-center"
            type="submit"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutOrder;
