import { createReducer } from '@reduxjs/toolkit';
import { saveToken, removeToken } from '../actions/authActions';

const initialState = {
    token: null,
    username: null,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(saveToken, (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
        })
        .addCase(removeToken, (state) => {
            state.token = null;
            state.username = null;
        });
});

export default authReducer;