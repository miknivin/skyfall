'use client';

import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { clearCompare, toggleCompareItem } from '@/redux/slices/compare-slice';
import { selectCompareItems } from '@/redux/selectors/compare-selector';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';

const CompareArea = () => {
  const compareItems = useAppSelector(selectCompareItems); // Selector to get all compare items
  const dispatch = useAppDispatch();

  // Dispatch action to add item to cart with initial quantity of 1
  const handleAddToCart = (product: IProductDT, quantity: number = 1) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  // Dispatch the action to remove product from Compare
  const handleToggleCompare = (product: IProductDT) => {
    dispatch(toggleCompareItem(product));
  };

  // Dispatch the action to remove all products from compare
  const handleClear = () => {
    const confirmed = window.confirm(
      'Are you sure you want to clear the comparison?'
    );
    if (confirmed) {
      dispatch(clearCompare());
      toast.success('Comparison cleared successfully!', {
        position: 'top-center',
      });
    }
  };

  return (
    <>
      {compareItems.length === 0 ? (
        <div className="it-error-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="it-error-box text-center">
                  <div className="it-error-content">
                    <h4 className="it-error-title">No Product to Compare!</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat, veritatis possimus. Et laudantium quasi cum
                      tenetur recusandae ipsam qui molestiae!
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
        <div className="d-flex flex-column align-items-center pt-60 pb-80">
          <div className="container compare-container ">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Product</th>
                  {compareItems.map((item) => (
                    <th key={item.id}>{item.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Image</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="compare-image"
                        width={300}
                        height={250}
                        style={{ height: 'auto' }}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Description</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>{item.description}</td>
                  ))}
                </tr>
                <tr>
                  <td>Price</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      {item.badgeTitle && <del>${item.price.toFixed(2)} </del>}
                      <strong>
                        ${Math.round(updatePrice(item)).toFixed(2)}
                      </strong>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Discount</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      {item.badgeTitle ? item.badgeTitle : 'New'}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td>Rating</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i> (
                      {item.rating})
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Add To Cart</td>
                  {compareItems.map((product) => (
                    <td key={product.id}>
                      <button
                        className="it-btn-primary"
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Remove</td>
                  {compareItems.map((product) => (
                    <td key={product.id}>
                      <button
                        type="button"
                        onClick={() => handleToggleCompare(product)}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="it-btn-primary mt-60"
            onClick={() => handleClear()}
          >
            Clear Comparison
          </button>
        </div>
      )}
    </>
  );
};
export default CompareArea;
