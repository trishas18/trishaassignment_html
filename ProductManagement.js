import React, { useState } from 'react';
import ProductInfo from './ProductInfo';

function ProductManagement() {
  const [productDetails, setProductDetails] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState(false); // Track whether to show product details
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission status

  const handleFormSubmit = (productData) => {
    setProductDetails([...productDetails, productData]); // Add productData to the array
    setIsFormSubmitted(true); // Set the form submission status to true
  };

  const toggleProductDetails = () => {
    setShowProductDetails(!showProductDetails); // Toggle the display of product details
  };

  const clearProductDetails = () => {
    setProductDetails([]); // Clear all product details
    setShowProductDetails(false); // Hide product details when clearing
    setIsFormSubmitted(false); // Reset form submission status when clearing
  };

  return (
    <div>
      <ProductInfo onFormSubmit={handleFormSubmit} />
      {isFormSubmitted && <p>Form submitted successfully!</p>}
      <button onClick={toggleProductDetails}>
        {showProductDetails ? 'Hide Product Details' : 'Show Product Details'}
      </button>
      <button onClick={clearProductDetails}>Clear</button>
      {showProductDetails && productDetails.length > 0 && (
        <div>
          <h2>All Product Details</h2>
          <ul>
            {productDetails.map((product, index) => (
              <li key={index}>
                <strong>ID:</strong> {product.id}, <strong>Name:</strong> {product.name}, <strong>Price:</strong> {product.price}, <strong>Brand:</strong> {product.brand}, <strong>Vendor:</strong> {product.vendor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductManagement;
