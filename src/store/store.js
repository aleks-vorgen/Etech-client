import {configureStore} from "@reduxjs/toolkit";
import {cartReducer, loadFromCookie} from "./reducers/cartReducer.js";
import {getCookie, setCookie} from "../utils/cookieUtils.js";
import {authReducer, saveToken} from "./reducers/authReducer.js";
import axios from "axios";
import {catalogReducer, saveCatalog} from "./reducers/catalogReducer.js";
import {server} from '../env.js'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        catalog: catalogReducer,
    }
})

store.subscribe(() => {
    const authState = store.getState().auth;
    const cartState = store.getState().cart;
    setCookie('authState', JSON.stringify(authState), 2);
    setCookie('cartState', JSON.stringify(cartState));
});

// Загрузка состояния из куки при загрузке страницы
const authState = getCookie('authState');
const cartState = getCookie('cartState');
axios.get(server + '/products/all').then(response => store.dispatch(saveCatalog(response.data)))

if (authState) {
    const parsedState = JSON.parse(authState);
    store.dispatch(saveToken(parsedState));
}
if (cartState) {
    const parsedState = JSON.parse(cartState);
    store.dispatch(loadFromCookie(parsedState.cart));
}