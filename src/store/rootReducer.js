import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import productReducer from './reducers/productSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
