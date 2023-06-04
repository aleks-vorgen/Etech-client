import React from "react";
import {Link} from "react-router-dom";
import {local} from "../../env.js";

const CartItem = (item) => {
    return (
        <Link to={`/products/id/id=${item.id}`}
              className="flex border-b border-black/10 p-3 last:border-none">
            <img src={local + `/images/product/${item.imgPath}`} alt={item.title} className='w-[10%] h-min'/>
            <div className='flex flex-col pl-3 w-full'>
                <p>{item.title}</p>
                <p className='text-right'>{item.price} ₴</p>
            </div>
        </Link>
    );
};

export default CartItem;
