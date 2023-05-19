import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Link to={`/products/id/id=${product.id}`}>
      <div className="text-start p-10">
        <div className="w-[200px] h-[280px] border-2 border-black/20 rounded-[3px]">
          <div className="w-[120px] h-[130px] mx-auto flex items-center justify-center pt-2 ">
            <img src={`http://localhost:8080/images/product/${product.imgPath}`} alt={product.title} />
          </div>
          <div className="mt-[20px] py-2">
            <h3 className="text-[14px]">{product.title.slice(0, 40)} ...</h3>
            <p className="font-[700] text-[18px] my-2">Price: {product.price} $</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
