import React from "react";
import {Link} from "react-router-dom";

const CartItem = () => {
    return (
        <Link to='/cart'>
            <div className="flex items-center p-2 border border-black/20 rounded-[3px]">
                <img src='/images/cart.svg' alt='cart.svg'/>
            </div>
        </Link>
    );
};

export default CartItem;
