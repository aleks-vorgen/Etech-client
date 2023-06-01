import { createReducer } from '@reduxjs/toolkit';
import { saveToken, removeToken } from '../actions/authActions';
import {persistReducer} from "redux-persist";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const initialState = {
    token: null,
    username: null,
    role: null,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(saveToken, (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.role = action.payload.role
        })
        .addCase(removeToken, (state) => {
            state.token = null;
            state.username = null;
            state.role = null;
        });
});

const persistConfig = {
    key: 'root',
    storage: {
        getItem: (key) => cookies.get(key),
        setItem: (key, value) => cookies.set(key, value, { path: '/' }),
        removeItem: (key) => cookies.remove(key, { path: '/' }),
    },
    whitelist: ['auth'], // Save only the "auth" state in cookies
};

export default persistReducer(persistConfig, authReducer);