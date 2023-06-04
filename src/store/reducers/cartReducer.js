import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        loadFromCookie: (state, action) => {
            state.cart = action.payload;
        },
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({...action.payload, quantity: 1});
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        clearCart: (state, action) => {
            state.cart = [];
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    loadFromCookie,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    clearCart,
} = cartSlice.actions;