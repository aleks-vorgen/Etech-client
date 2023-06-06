import React from "react";
import {Link} from "react-router-dom";
import {server} from "../../env.js";
import {useDispatch} from "react-redux";
import {removeItem} from "../../store/reducers/cartReducer.js";

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    function handleRemoveItem() {
        dispatch(removeItem(item.id));
    }
    return (
        <div className='relative border-b border-black/10 p-5 last:border-none'>
            <Link to={`/products/id/id=${item.id}`}
                  className="flex ">
                <img src={server + `/images/product/${item.imgPath}`} alt={item.title} className='max-w-[75px]'/>
                <div className='flex flex-col pl-5 w-full justify-between'>
                    <p className='w-4/5 truncate'>{item.title}</p>
                    <p className='text-right'>{item.price} ₴</p>
                </div>
            </Link>
            <button className='x-button' onClick={handleRemoveItem}>x</button>
        </div>
    );
};

export default CartItem;
