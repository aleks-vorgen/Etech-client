//карточка с карточкой товара категории и главного экрана
//<img src={product.imgPath} alt={product.imgPath} /> 
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SingleProductCard = ({ product }) => {
  const imageURL = 'https://content1.rozetka.com.ua/goods/images/big/221208867.jpg'
  return (
    <Fragment>
      <Link to={`/products/${product.id}`}>
        <div className='w-[190px] h-[260px] border-2 border-white/30' >
          <div className='w-[130px] h-[140px] relative bg-cover bg-center'>
            <img src={imageURL} alt='мое' />
          </div>
          <div>
            <h2>{product.title.slice(0, 20)} ...</h2>
            <p>{product.price} грн</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default SingleProductCard ;