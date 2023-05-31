import { createAction } from '@reduxjs/toolkit';

export const saveToken = createAction('SAVE_TOKEN', (token, username) => {
    return {
        payload: {token, username},
    };
});
export const removeToken = createAction('REMOVE_TOKEN');