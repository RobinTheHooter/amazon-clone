import React from "react";
import CurrencyFormat from "react-currency-format";
import "./CheckoutProducts.css";
import { useStateValue } from "../Context/StateProvider";

function CheckoutProducts({ image, title, price, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  // remove items from the cart
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      title: title,
      image: image,
      price: price,
    });
  };
  return (
    <div className="checkout-products">
      <img src={image} alt="" className="checkout-products-image" />
      <div className="checkout-products-info">
        <p className="checkout-products-title">{title}</p>
        <p className="checkout-products-price">
          <small>₹</small>
          <strong>
            <CurrencyFormat
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              value={price}
              prefix={""}
            />
          </strong>
        </p>
        {!hideButton && (
          <button className="remove-checkout-products" onClick={removeFromCart}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProducts;
