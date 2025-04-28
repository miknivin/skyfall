'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { selectIsProductInCart } from '@/redux/selectors/cart-selector';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';
import { selectIsProductInWishlist } from '@/redux/selectors/wishlist-selector';
import { toggleWishlistItem } from '@/redux/slices/wishlist-slice';
import { toggleCompareItem } from '@/redux/slices/compare-slice';
import { selectIsProductInCompare } from '@/redux/selectors/compare-selector';

interface ShopItemProps {
  product: IProductDT;
}

const ShopItemTwo = ({ product }: ShopItemProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isProductInCart = useAppSelector((state) =>
    selectIsProductInCart(state, product.id)
  ); // selector to check if the product is in Cart
  const isProductInWishlist = useAppSelector((state) =>
    selectIsProductInWishlist(state, product.id)
  ); // selector to check if the product is in Wishlist
  const isProductInCompare = useAppSelector((state) =>
    selectIsProductInCompare(state, product.id)
  ); // selector to check if the product is in Compare

  // Dispatch action to add item to cart with initial quantity of 1
  const handleAddToCart = (product: IProductDT, quantity: number = 1) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  // Handler to Navigate to the cart page
  const handleViewCart = () => {
    router.push('/cart');
  };

  // Dispatch action to add item to wishlist
  const handleToggleWishlist = (product: IProductDT) => {
    dispatch(toggleWishlistItem(product));
  };

  // Dispatch action to add item to Compare
  const handleToggleCompare = (product: IProductDT) => {
    dispatch(toggleCompareItem(product));
  };

  return (
    <div className="it-shop-item p-relative">
      <div className="it-shop-thumb p-relative">
        <Link href={`/shop-details/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={370}
            height={450}
            style={{ height: 'auto' }}
          />
        </Link>
      </div>
      <div className="it-shop-categories">
        <span>{product.badgeTitle ? `-${product.badgeTitle}` : 'new'}</span>
      </div>
      <div className="it-shop-action-box">
        <button
          className={
            isProductInCompare
              ? 'it-shop-action-btn active'
              : 'it-shop-action-btn'
          }
          onClick={() => handleToggleCompare(product)}
        >
          <i className="flaticon-reload"></i>
        </button>
        <button
          className={
            isProductInWishlist
              ? 'it-shop-action-btn active'
              : 'it-shop-action-btn'
          }
          onClick={() => {
            handleToggleWishlist(product);
          }}
        >
          <i className="flaticon-like"></i>
        </button>
      </div>
      <div className="it-shop-content text-center">
        <h3 className="it-shop-title mb-15">
          <Link href={`/shop-details/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="it-shop-price-box mb-25 d-flex align-items-center justify-content-between">
          <div className="it-shop-price">
            <p>
              ${Math.round(updatePrice(product)).toFixed(2)}{' '}
              {product.badgeTitle && <del>${product.price.toFixed(2)}</del>}
            </p>
          </div>
          <div className="it-shop-rating mb-5">
            <span>
              <i className="flaticon-star"></i> {product.rating}k
            </span>
          </div>
        </div>
        <div className="it-shop-button">
          <button
            className="shop-btn"
            onClick={() => {
              if (isProductInCart) {
                handleViewCart();
              } else {
                handleAddToCart(product);
              }
            }}
          >
            {isProductInCart ? 'View Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShopItemTwo;
