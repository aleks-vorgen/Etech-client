import React from 'react';
import { useParams } from 'react-router-dom';

const SelectedProduct = ({ products }) => {
  const { id } = useParams();

  // Find the selected product based on the id
  const selectedProduct = products.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>Selected Product</h2>
      <h3>{selectedProduct.title}</h3>
      <p>Price: {selectedProduct.price}</p>
      <p>Producer: {selectedProduct.producer}</p>
      {/* Render other product details */}
    </div>
  );
};

export default SelectedProduct;