import React from "react";
import "./ProductTypeOne.css";

function ProductTypeTwo({
  productHeading,
  productImage,
  productDescription,
  seeMore,
}) {
  return (
    <div className="Products">
      <h2>{productHeading}</h2>
      <div className="product-row-1 card-container">
        <div className="products-info">
          <div className="card">
            <img src={productImage} alt="#" className="product-image-2" />
            <p>
              <small>{productDescription}</small>
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

export default ProductTypeTwo;
