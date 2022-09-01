import React from "react";
import "./ProductTypeOne.css";

function productTypeOne({
  productHeading,
  productImageOne,
  productImageTwo,
  productImageThree,
  productImageFour,
  productDescriptionOne,
  productDescriptionTwo,
  productDescriptionThree,
  productDescriptionFour,
  seeMore,
}) {
  return (
    <div className="Products">
      <div className="product-heading">
        <h2>{productHeading}</h2>
      </div>
      <div className="product-row-1 card-container">
        <div className="products-info">
          <div className="card">
            <img src={productImageOne} alt="#" className="product-image-1" />
            <p>
              <small>{productDescriptionOne}</small>
            </p>
          </div>
        </div>
        <div className="products-info">
          <div className="card">
            <img src={productImageTwo} alt="#" className="product-image-1" />
            <p>
              <small>{productDescriptionTwo}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="product-row-2 card-container">
        <div className="products-info">
          <div className="card">
            <img src={productImageThree} alt="#" className="product-image-1" />
            <p>
              <small>{productDescriptionThree}</small>
            </p>
          </div>
        </div>
        <div className="products-info">
          <div className="card">
            <img src={productImageFour} alt="#" className="product-image-1" />
            <p>
              <small>{productDescriptionFour}</small>
            </p>
          </div>
        </div>
      </div>

      <div className="see-more">
        <small>{seeMore}</small>
      </div>
    </div>
  );
}

export default productTypeOne;
