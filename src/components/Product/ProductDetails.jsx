import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/all/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;

