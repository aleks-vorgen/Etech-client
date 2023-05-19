import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const image =
    "https://i.citrus.world/imgcache/size_800/uploads/shop/7/d/7d4e266a9aa449773a69a0a6a1e164f0.jpg";

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Link to={`/products/id/id=${product.id}`}>
      <div className="text-start mt-10 mr-[40px]">
        <div className="w-[200px] h-[280px] border-2 border-black/20 rounded-[3px] p-4">
          <div className="w-[120px] h-[130px] mx-auto flex items-center justify-center mt-4">
            <img src={image} alt={product.imgPath} />
          </div>
          <div className="mt-[20px] py-2 ">
            <h3 className="text-[14px]">{product.title.slice(0,40)} ...</h3>
            <p className="font-[700] text-[18px] my-2">{product.price} ₴</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
