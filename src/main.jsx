import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import {BrowserRouter} from 'react-router-dom'
import authReducer from "./store/reducers/authReducer.js";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {saveToken} from "./store/actions/authActions.js";
import {getCookie, setCookie} from "./utils/cookieUtils.js"

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

store.subscribe(() => {
    const state = store.getState().auth;
    setCookie('authState', JSON.stringify(state));
});

// Загрузка состояния из куки при загрузке страницы
const savedState = getCookie('authState');
if (savedState) {
    const parsedState = JSON.parse(savedState);
    store.dispatch(saveToken(parsedState.token, parsedState.username, parsedState.role)); // Диспатч экшена для сохранения состояния из куки
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
