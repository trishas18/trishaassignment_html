import React from 'react';

function ProductDetails({ product }) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Vendor: {product.vendor}</p>
    </div>
  );
}

export default ProductDetails;
