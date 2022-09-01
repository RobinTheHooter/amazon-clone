import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context/StateProvider";
import { getCartTotal } from "../Context/reducer";

function Subtotal() {
  const [{ cart }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong> {value}.00</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="subtotal-button">Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
