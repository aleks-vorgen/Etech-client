import {createSlice} from "@reduxjs/toolkit";


const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        catalog: [],
    },
    reducers: {
        saveCatalog: (state, action) => {
            state.catalog = action.payload;
        },
    },
});

export const catalogReducer = catalogSlice.reducer;
export const {
    saveCatalog,
} = catalogSlice.actions;