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
      <div className="text-start m-10">
        <div className="w-[200px] h-[260px] border-2 border-black/20 rounded-[3px]">
          <div className="w-[130px] h-[140px] mx-auto items-center justify-center pt-2 ">
            <img src={image} alt={product.imgPath} />
          </div>
          <div className="pt-[30px] pl-2">
            <h3>{product.title.slice(0, 40)} ...</h3>
            <p>Price: {product.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
