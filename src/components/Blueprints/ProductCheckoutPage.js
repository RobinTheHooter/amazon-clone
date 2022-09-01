import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context/StateProvider";
import * as FaIcons from "react-icons/fa";
import "./ProductCheckoutPage.css";

function ProductCheckoutPage({
  id,
  title,
  image,
  mrp,
  price,
  percent,
  save,
  rating,
  ratingNumber,
}) {
  const [{ cart }, dispatch] = useStateValue();
  // to check whether the action of pushing is working or not
  console.log(cart);

  const addToCart = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="main-product-container">
      <div className="sub-container-1">
        <div className="products-image">
          <img src={image} alt="" />
        </div>
        <div className="products-info">
          <p className="products-title">
            <span className="main-title">{title}</span>
          </p>
          <div className="products-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>
                  <span>⭐</span>
                </p>
              ))}{" "}
            <span className="products-rating-number">
              <CurrencyFormat
                decimalScale={2}
                value={ratingNumber}
                displayType={"text"}
                thousandSeparator={true}
              />{" "}
              ratings
            </span>
          </div>
          <hr />

          <div className="pricing">
            <p className="mrp-price-main">
              <span className="percent-off">-{percent}%</span>
              &nbsp;&nbsp;&nbsp;
              <span className="deal-price">
                <CurrencyFormat
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  value={price}
                  prefix={"₹"}
                />
                <span className="zeros">00</span>
              </span>
            </p>

            <p className="mrp-price-1">
              M.R.P.:{" "}
              <span>
                <CurrencyFormat
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  value={mrp}
                  prefix={"₹"}
                />
                .00
              </span>
            </p>

            <p className="mrp-price-2">
              You Save:{" "}
              <span>
                <CurrencyFormat
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  value={save}
                  prefix={"₹"}
                />
                .00
              </span>
            </p>
          </div>
          <hr />
          <p className="offers-text">Offers</p>
          <div className="offer-boxes">
            <div className="offer-box">
              <p className="main-text">No Cost EMI</p>
              <p className="sub-text">
                Avail No Cost EMI on select cards for orders above ₹3000
              </p>
              <p className="bottom-text">
                1 offer{" "}
                <span>
                  <FaIcons.FaChevronRight className="fa-chevron-right" />
                </span>
              </p>
            </div>
            <div className="offer-box">
              <p className="main-text">Bank Offer</p>
              <p className="sub-text">
                Get 7.5% up to Rs. 1500 Instant <br /> Discount on Kotak…
              </p>
              <p className="bottom-text">
                3 offers{" "}
                <span>
                  <FaIcons.FaChevronRight className="fa-chevron-right" />
                </span>
              </p>
            </div>
            <div className="offer-box">
              <p className="main-text">Partner Offers</p>
              <p className="sub-text">
                Get GST invoice and save up to 28% on business purchases.
              </p>
              <p className="bottom-text">
                1 offer{" "}
                <span>
                  <FaIcons.FaChevronRight className="fa-chevron-right" />
                </span>
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="product-card">
          <div className="product-checkout-card">
            <div className="checkout-card-details">
              <p className="products-price">
                <CurrencyFormat
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  value={price}
                  prefix={"₹"}
                />
                <span className="zeros">00</span>
              </p>
              <p className="taxes">Inclusive of all taxes</p>
              <p className="delivery-note">
                <span>₹25 delivery</span> Tuesday, 23 August.{" "}
                <span> Details</span>
              </p>
              <p className="in-stock">In stock.</p>
              <p className="sold-by">
                Sold by <span>India Today - Distribution Services</span> and
                Delivered by Amazon.
              </p>
              <button className="add-to-cart-btn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-container-2">
        <div className="special-offers-section">
          <p className="products-title">
            Special offers and product promotions
          </p>
          <ul>
            <li>
              <p className="special-offer">
                Get 7.5% up to Rs. 1500 Instant Discount on Kotak Bank Credit
                Card and Debit Card EMI transactions.{" "}
                <span>
                  Here's how{" "}
                  <FaIcons.FaChevronDown className="fa-chevron-down" />
                </span>
              </p>
            </li>
            <li>
              <p className="special-offer">
                Get 7.5% up to Rs. 1500 Instant Discount on Standard Chartered
                Credit Card EMI transactions.{" "}
                <span>
                  Here's how{" "}
                  <FaIcons.FaChevronDown className="fa-chevron-down" />
                </span>
              </p>
            </li>
            <li>
              <p className="special-offer">
                5% Instant Discount up to INR 250 on HSBC Cashback Card Credit
                Card Transactions. Minimum purchase value INR 1000.{" "}
                <span>
                  Here's how{" "}
                  <FaIcons.FaChevronDown className="fa-chevron-down" />
                </span>
              </p>
            </li>
            <li>
              <p className="special-offer">
                No cost EMI available on select cards. Please check 'EMI
                options' above for more details.{" "}
                <span>
                  Here's how{" "}
                  <FaIcons.FaChevronDown className="fa-chevron-down" />
                </span>
              </p>
            </li>
            <li>
              <p className="special-offer">
                Get GST invoice and save up to 28% on business purchases.{" "}
                <span>
                  Here's how{" "}
                  <FaIcons.FaChevronDown className="fa-chevron-down" />
                </span>
              </p>
            </li>
          </ul>
        </div>
        <hr />
        <div className="customer-reviews">
          <p className="products-title">Customer reviews</p>
          <p className="text-2">Failed to load reviews...</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCheckoutPage;
