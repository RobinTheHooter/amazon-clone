import React from "react";
import "./Checkout.css";
import CheckoutProducts from "../Blueprints/CheckoutProducts";
import { useStateValue } from "../Context/StateProvider";
import Subtotal from "../Static-components/Subtotal";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="checkout-left-title">
          <p>Shopping Cart</p>
        </div>
        {cart.map((item) => (
          <CheckoutProducts
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
