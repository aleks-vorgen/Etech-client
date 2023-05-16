import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://etech-5fydkirpga-lm.a.run.app/products/${id}`);
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
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.producer}</p>
      <p>{product.description}</p>
      <img src={product.imgPath} alt={product.title} />
      {/* Остальные свойства продукта */}
    </div>
  );
};

export default ProductCard;
