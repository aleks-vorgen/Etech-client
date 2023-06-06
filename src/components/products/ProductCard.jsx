import React from "react";
import {Link} from "react-router-dom";
import {server} from '../../env.js'

const ProductCard = ({product}) => {
    function getPriceWithDiscount(price, discount) {
        return discount !== 0 ? price - price / 100 * discount : price;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Link to={`/products/id/id=${product.id}`}>
            <div className="mx-auto px-5 py-8 border border-black/20 rounded-[3px] gap-4 h-full hover:shadow-lg">
                <div className='h-[200px] text-center'>
                    <img
                        src={server + `/images/product/${product.imgPath}`}
                        alt={product.title}
                        className="max-h-[200px] inline-block"
                    />
                </div>
                <p className="mt-4 text-[16px] text-gray-700 truncate">
                    {product.title}
                </p>
                <p className={product.discount >= 1 ? 'mt-2 text-[22px] font-bold text-[#f84147]' : ' hidden'}>{getPriceWithDiscount(product.price, product.discount)} ₴
                </p>
                <p className={product.discount > 0 ? 'font-[400] text-[16px] text-black/80 line-through ' : " mt-2 font-[700] text-[24px]"}>{product.price} ₴</p>
            </div>

        </Link>
    );
};

export default ProductCard;
