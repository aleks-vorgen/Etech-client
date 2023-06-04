import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
      console.log(cart)
  }, [cart])

    return (
        <div className="cartBody">
            {cart.cart.length > 0 ? cart.cart.map(item => (
                <CartItem key={item.id} item={item}/>
            )) : <p>Cart is empty</p>}
        </div>
    );
};

export default CartList;
