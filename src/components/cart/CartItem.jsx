import React from "react";
import {RiShoppingBasketFill} from "react-icons/ri";

const CartItem = ({item}) => {
    return (
        <div className="flex items-center ml-3 min-w-[193px]">
            <RiShoppingBasketFill className="text-2xl fill-blue scale-150"/>
            <div className='pl-3'>
                <div className="flex justify-between items-center">
                    <span className="text-[16px]">Товарів:</span>
                    <span className="pl-6 font-bold ">3 шт.</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className="text-[16px]">Сума:</span>
                    <span className="pl-6 font-bold ">1350 грн.</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
