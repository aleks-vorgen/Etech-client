import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import {BrowserRouter} from 'react-router-dom'
import authReducer from "./store/reducers/authReducer.js";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
