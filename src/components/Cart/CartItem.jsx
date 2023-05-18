import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default CartItem;
