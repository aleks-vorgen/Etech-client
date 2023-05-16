import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function ProductCard ({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://etech-5fydkirpga-lm.a.run.app/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Producer: {product.producer}</p>
      {/* Render other product details here */}
    </div>
  );
};

export default ProductCard;
