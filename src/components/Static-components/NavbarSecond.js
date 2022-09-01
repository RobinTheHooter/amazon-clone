import React from "react";
import "./NavbarSecond.css";
import prime from "../images/second-navbar-image.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Transition } from "react-transition-group";
import SecondSideBar from "../Static-components/SecondSideBar";

export default function NavbarSecond() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  // state to open the side bar menu
  const openSideMenu = () => {
    setSideMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  // state to close the side bar menu
  const closeSideMenu = () => {
    setSideMenuOpen(false);
    document.body.style.overflow = null;
  };

  return (
    <div className="second-navbar">
      <Transition in={sideMenuOpen} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <>
              <SecondSideBar state={state} />

              {/* The transparent black background */}
              <div
                className="overlay"
                style={
                  state === "entering"
                    ? { animation: "show 0.4s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : { animation: "show 0.4s backwards reverse" }
                }
                onClick={closeSideMenu}
              ></div>

              {/* cross icon to close the side bar */}
              <div
                className="close-sidebar-button"
                style={
                  state === "entering"
                    ? { animation: "show 0.4s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : { animation: "show 0.4s backwards reverse" }
                }
                onClick={closeSideMenu}
              >
                &times;
              </div>
            </>
          );
        }}
      </Transition>

      <div className="second-navbar-list">
        <ul className="second-navbar-sub-list">
          <li>
            <div className="side-bar-button" onClick={openSideMenu}>
              <p className="hamburger-icon">&#9776;</p>{" "}
              <p className="all-button">All</p>
            </div>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>Mobiles</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>Best Sellers</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/checkout">
              <div>Customer Service</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>Today's Deals</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/checkout">
              <div>Fashion</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>Electronics</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/checkout">
              <div>Prime</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>Books</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/checkout">
              <div>Home & Kitchen</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>New Releases</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/checkout">
              <div>Amazon Pay</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>Computers</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/checkout">
              <div>Coupons</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/products">
              <div>Toys & Games</div>
            </Link>
          </li>
          <li className="list-item-1">
            <Link className="links" to="/checkout">
              <div>Sell</div>
            </Link>
          </li>
        </ul>
        <li className="list-item">
          <Link className="links" to="/products">
            <img className="prime-image" src={prime} alt="#" />
          </Link>
        </li>
      </div>
    </div>
  );
}
