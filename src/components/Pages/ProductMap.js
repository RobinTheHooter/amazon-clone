import React from "react";
import { useStateValue } from "../Context/StateProvider";
import ProductCheckoutPage from "../Blueprints/ProductCheckoutPage";

function ProductMap() {
  const [{ product }] = useStateValue();
  return (
    <div>
      {product.map((item) => (
        <ProductCheckoutPage
          title={item.title}
          image={item.image}
          price={item.price}
          mrp={item.subPrice}
          percent={item.percent}
          save={item.save}
          rating={item.rating}
          ratingNumber={item.ratingNumber}
        />
      ))}
    </div>
  );
}

export default ProductMap;
