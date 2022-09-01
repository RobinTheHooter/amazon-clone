import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context/StateProvider";
import "./ProductTypeThree.css";

function ProductTypeThree({
  image,
  title,
  price,
  subPrice,
  save,
  percentageOffPrice,
  rating,
  ratingNumber,
}) {
  const [{ cart }, dispatch] = useStateValue();

  // to check whether the action of pushing is working or not
  console.log(cart);

  const addToDataLayer = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_DATA_LAYER",
      item: {
        title: title,
        image: image,
        price: price,
        subPrice: subPrice,
        percent: percentageOffPrice,
        save: save,
        rating: rating,
        ratingNumber: ratingNumber,
      },
    });
  };
  return (
    <div className="product-cards" onClick={addToDataLayer}>
      <div className="product-row-1 product-container">
        <div className="card">
          <img src={image} alt="" className="product-image" />
          <div className="product-info">
            <p className="product-name">{title}</p>
            <div className="rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>
                    <span>⭐</span>
                  </p>
                ))}{" "}
              <span className="rating-number">
                <CurrencyFormat
                  decimalScale={2}
                  value={ratingNumber}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </span>
            </div>
            <p className="product-price">
              <CurrencyFormat
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                value={price}
                prefix={"₹"}
              />{" "}
              <span className="sub-price">
                <CurrencyFormat
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  value={subPrice}
                  prefix={"₹"}
                />
              </span>
              {"  "}
              <span className="save">
                <CurrencyFormat
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  value={save}
                  prefix={"₹"}
                />
              </span>
              {"  "}
              <span className="percentage-off-price">
                {"("}
                {percentageOffPrice}% off{")"}
              </span>
            </p>
            <p className="sub-description">
              Get it by{" "}
              <span className="sub-description-2">Sunday, July 24</span>
            </p>
            <p className="sub-description-3">FREE Delivery by Amazon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTypeThree;
