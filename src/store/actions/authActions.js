import { createAction } from '@reduxjs/toolkit';

export const saveToken = createAction('SAVE_TOKEN', (token, username, role) => {
    return {
        payload: {token, username, role},
    };
});
export const removeToken = createAction('REMOVE_TOKEN');