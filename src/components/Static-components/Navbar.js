import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import shoppingCart from "../images/cart.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function Navbar() {
  const [{ cart }] = useStateValue();
  return (
    <div>
      <div className="Navbar">
        <Link className="logo" to="/">
          <div className="amazon-logo">
            <img
              className="Navbar-logo"
              src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
              alt="amazon-logo"
            />
          </div>
        </Link>
        <div className="search-bar">
          <input className="Navbar-search-input" type="text" />
          <SearchIcon className="Navbar-search-icon" />
        </div>
        <div className="Navbar-side">
          <Link className="login-link" to="/login">
            <div className="Navbar-options sign-in">
              <span className="Navbar-option-line-1">Hello, Sign-in</span>
              <span className="Navbar-option-line-2">Accounts & Lists</span>
            </div>
          </Link>
          <Link className="orders-link" to="/login">
            <div className="Navbar-options orders">
              <span className="Navbar-option-line-1">Returns</span>
              <span className="Navbar-option-line-2">& Orders</span>
            </div>
          </Link>
          <Link className="checkout-link" to="/checkout">
            <div className="Navbar-cart">
              <img
                className="shopping-cart-logo"
                src={shoppingCart}
                alt="cart logo"
              />
              <p className="Navbar-option-line-2 cart-item-counter">
                {cart?.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
