import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductDetails from './ProductDetails';
import { fetchProducts } from '../../store/reducers/productSlice';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
