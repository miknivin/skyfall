'use client';

import { useState } from 'react';
import Link from 'next/link';

interface IProps {
  isMobileMenu?: boolean;
}

const MenuItems = ({ isMobileMenu }: IProps) => {
  const [home, setHome] = useState<boolean>(false);
  const [tour, setTour] = useState<boolean>(false);
  const [destination, setDestination] = useState<boolean>(false);
  const [page, setPage] = useState<boolean>(false);
  const [blog, setBlog] = useState<boolean>(false);

  const openMobileMenu = (
    menu: 'home' | 'tour' | 'destination' | 'page' | 'blog'
  ): void => {
    if (menu === 'home') {
      setHome(!home);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'tour') {
      setHome(false);
      setTour(!tour);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'destination') {
      setHome(false);
      setTour(false);
      setDestination(!destination);
      setPage(false);
      setBlog(false);
    } else if (menu === 'page') {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === 'blog') {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isMobileMenu === true) {
      e.preventDefault();
    }
  };

  return (
    <ul>
      <li className="has-dropdown p-static">
        <Link href="#" onClick={handleClick}>
          Home
          <button
            className={`${
              home
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none `}
            onClick={() => {
              openMobileMenu('home');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={home ? 'it-submenu submenu d-block' : 'it-submenu submenu'}
        >
          <li>
            <Link href="/">Home 01</Link>
            <Link href="/home-2">Home 02</Link>
            <Link href="/home-3">Home 03</Link>
            <Link href="/home-4">Home 04</Link>
            <Link href="/home-5">Home 05</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="/tour" onClick={handleClick}>
          Tours
          <button
            className={`${
              tour
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none `}
            onClick={() => {
              openMobileMenu('tour');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={tour ? 'it-submenu submenu d-block' : 'it-submenu submenu'}
        >
          <li>
            <Link href="/tour">Tour</Link>
            <Link href="/tour-details/1">Tour Details</Link>
            <Link href="/booking-page">Booking Page</Link>
            <Link href="/booking-checkout">Booking Checkout</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="/destination" onClick={handleClick}>
          Destination
          <button
            className={`${
              destination
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none `}
            onClick={() => {
              openMobileMenu('destination');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            destination ? 'it-submenu submenu d-block' : 'it-submenu submenu'
          }
        >
          <li>
            <Link href="/destination">Destination</Link>
            <Link href="/destination-details/1">Destination Details</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <a href="#">
          Pages
          <button
            className={`${
              page
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none `}
            onClick={() => {
              openMobileMenu('page');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </a>
        <ul
          className={page ? 'it-submenu submenu d-block' : 'it-submenu submenu'}
        >
          <li>
            <Link href="/about">About</Link>
            <Link href="/event-grid">Event Grid</Link>
            <Link href="/event-list">Event List</Link>
            <Link href="/event-details/1">Event Details</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/team">Team</Link>
            <Link href="/team-2">Team Carousel</Link>
            <Link href="/testimonial">Testimonial</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/shop-details/1">Shop Details</Link>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/404">Error</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="/blog" onClick={handleClick}>
          Blog
          <button
            className={`${
              blog
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none `}
            onClick={() => {
              openMobileMenu('blog');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={blog ? 'it-submenu submenu d-block' : 'it-submenu submenu'}
        >
          <li>
            <Link href="/blog">Blog Standard</Link>

            <Link href="/blog-sidebar">Blog Sidebar</Link>

            <Link href="/blog-details/1">Blog Details</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MenuItems;
