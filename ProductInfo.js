import React, { useState } from 'react';

function ProductInfo({ onFormSubmit }) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    brand: '',
    vendor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(product);
  };

  return (
    <div>
      <h2>Product Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={product.id} onChange={handleInputChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" name="brand" value={product.brand} onChange={handleInputChange} />
        </div>
        <div>
          <label>Vendor:</label>
          <input type="text" name="vendor" value={product.vendor} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductInfo;
