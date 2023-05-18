import React from 'react';
import { useSelector } from 'react-redux';

const CartTotal = () => {
  const cartItems = useSelector(state => state.cart);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-total">
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartTotal;
