import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { item } = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((cartItem) => cartItem.id === id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.find((item) => item.id === id);

      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.find((item) => item.id === id);

      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
        } else {
          const index = state.findIndex((item) => item.id === id);
          if (index !== -1) {
            state.splice(index, 1);
          }
        }
      }
    },
    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
