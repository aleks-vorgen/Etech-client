import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: null,
        lastname: null,
        firstname: null,
        middlename: null,
        email: null,
        token: null,
        role: null,
    },
    reducers: {
        saveToken: (state, action) => {
            state.username = action.payload.username;
            state.lastname = action.payload.lastname;
            state.firstname = action.payload.firstname;
            state.middlename = action.payload.middlename;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        removeToken: (state, action) => {
            state.username = null;
            state.lastname = null;
            state.firstname = null;
            state.middlename = null;
            state.email = null;
            state.token = null;
            state.role = null;
        }
    }
});

export const authReducer = authSlice.reducer;

export const {
    saveToken,
    removeToken,
} = authSlice.actions;