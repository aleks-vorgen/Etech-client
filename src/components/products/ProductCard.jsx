import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product}) => {
  function getPriceWithDiscount(price, discount) {
    return discount !== 0 ? price - price / 100 * discount : price;
}

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Link to={`/products/id/id=${product.id}`}>
      <div className="mx-auto px-5 py-8 border-2 border-black/30 gap-4 h-[100%]">
        <div className="w-full overflow-clip">
          <img
            src={`https://etech-5fydkirpga-lm.a.run.app/images/product/${product.imgPath}`}
            alt={product.title}
            className="w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <p className="mt-4 text-[16px] text-gray-700 truncate">
          {product.title}
        </p>
        <p className={product.discount >= 1 ? 'mt-2 text-[22px] font-bold text-[#f84147]' : 'hidden'}>{getPriceWithDiscount(product.price, product.discount)} ₴ 
        </p>
        <p className={product.discount > 0 ? 'font-[400] text-[16px] text-black/80 line-through ' : "font-[700] text-[24px]"}>{product.price} ₴</p>
      </div>
    </Link>
  );
};

export default ProductCard;
