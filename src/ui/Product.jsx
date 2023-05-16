import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <h2>{product.title}</h2>
        <img src={product.imgPath} alt={product.imgPath} />
        <p>{product.price}</p>
      </Link>
    </div>
  );
};

export default Product;