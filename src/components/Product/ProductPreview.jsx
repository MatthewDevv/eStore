import React from "react";
import { Link } from "react-router-dom";

import ProductPhoto from "./ProductPhoto";

export default function ProductPreview({ product, component }) {
  return (
    <>
      <ProductPhoto product={product} component={component} />
      <section>
        <div className="product-preview-title mt-1">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </div>
        {component !== "ProductsHistory" ? (
          <p className="fs-7 mb-0 text-main">{product.price} PLN</p>
        ) : null}
      </section>
    </>
  );
}
