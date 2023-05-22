import React from "react";
import { RiShoppingBasketFill } from "react-icons/ri";

const CartItem = ({ item }) => {
  return (
    <div className=" ml-10 flex justify-between items-center mr-4">
      <RiShoppingBasketFill className="text-2xl mr-4 fill-blue scale-150" />
      <div>
        <div className="flex justify-between items-center">
          <span className="px-6 py-1 text-[16px]">
            Товарів:
          </span>
          <span className="font-bold "> 3 шт.</span>
        </div>
        <span className="px-6 py-1 text-[16px]">
          Сума:
        </span>
        <span className="font-bold "> 1350 грн.</span>
      </div>
    </div>
  );
};

export default CartItem;
