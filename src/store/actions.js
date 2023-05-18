import { createAction } from '@reduxjs/toolkit';

// Action creators for the cart feature
export const addToCart = createAction('cart/addToCart');
export const removeFromCart = createAction('cart/removeFromCart');
export const updateCartItemQuantity = createAction('cart/updateCartItemQuantity');

// Action creators for the product feature
export const fetchProductsRequest = createAction('product/fetchProductsRequest');
export const fetchProductsSuccess = createAction('product/fetchProductsSuccess');
export const fetchProductsFailure = createAction('product/fetchProductsFailure');
