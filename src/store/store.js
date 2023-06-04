import { configureStore } from "@reduxjs/toolkit";
import {addToCart, cartReducer, loadFromCookie} from "./reducers/cartReducer.js";
import authReducer from "./reducers/authReducer.js";
import {getCookie, setCookie} from "../utils/cookieUtils.js";
import {saveToken} from "./actions/authActions.js";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    }
})

store.subscribe(() => {
    const authState = store.getState().auth;
    //const cartState = store.getState().cart;
    setCookie('authState', JSON.stringify(authState));
    //setCookie('cartState', JSON.stringify(cartState));
});

// Загрузка состояния из куки при загрузке страницы
const authState = getCookie('authState');
//const cartState = getCookie('cartState');
if (authState) {
    const parsedState = JSON.parse(authState);
    store.dispatch(saveToken(parsedState.token, parsedState.username, parsedState.role)); // Диспатч экшена для сохранения состояния из куки
}
//if (cartState) {
//    const parsedState = JSON.parse(cartState);
//    store.dispatch(loadFromCookie(parsedState))
//}