import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/categories/${categoryId}/products`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
