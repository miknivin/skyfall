"use client";

import { useState } from "react";
import Link from "next/link";
import { districts } from "@/data/locations";

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
    menu: "home" | "tour" | "destination" | "page" | "blog"
  ): void => {
    if (menu === "home") {
      setHome(!home);
      setTour(false);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "tour") {
      setHome(false);
      setTour(!tour);
      setDestination(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "destination") {
      setHome(false);
      setTour(false);
      setDestination(!destination);
      setPage(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setTour(false);
      setDestination(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === "blog") {
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
      <li className="p-static">
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
      </li>
      <li className="has-dropdown">
        <Link href="/about" onClick={handleClick}>
          About
          <button
            className={`${
              tour
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none `}
            onClick={() => {
              openMobileMenu("tour");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={tour ? "it-submenu submenu d-block" : "it-submenu submenu"}
        >
          <li>
            <Link href="/about/vision-and-mission">Vision & Mission</Link>
            <Link href="/about/message">Message from the Chairman & MD</Link>
            <Link href="/about/overview">Business overview</Link>
            <Link href="/about/team">Team</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link href="/destination" onClick={handleClick}>
          Locations
          <button
            className={`${
              destination
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none `}
            onClick={() => {
              openMobileMenu("destination");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            destination ? "it-submenu submenu d-block" : "it-submenu submenu"
          }
        >
          <li>
            {districts.map((district, index) => (
              <Link
                key={district.id || index}
                href={`/destination-details/${district.id}`}
              >
                {district.name}
              </Link>
            ))}
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <a href="#">
          Services
          <button
            className={`${
              page
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none `}
            onClick={() => {
              openMobileMenu("page");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </a>
        <ul
          className={page ? "it-submenu submenu d-block" : "it-submenu submenu"}
        >
          <li>
            <Link href="/service">Resorts</Link>
            <Link href="/service">Adventures</Link>
            <Link href="/service">Corporate Events</Link>
            <Link href="/service">Destination wedding & celebration. </Link>
            <Link href="/service">Medical & Leisure</Link>
            <Link href="/service">Ayurvedic & wellness packages</Link>
            <Link href="/service">Ayurvedic & wellness packages</Link>
            <Link href="/service">Houseboat and water adventure packages.</Link>
            <Link href="/service">Tickets, Visas and Tours</Link>
            {/* <Link href="/shop">Shop</Link>
            <Link href="/shop-details/1">Shop Details</Link>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/404">Error</Link> */}
          </li>
        </ul>
      </li>
      {/* <li className="has-dropdown">
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
      </li> */}
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MenuItems;
