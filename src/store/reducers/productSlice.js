import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // Simulate an API call to fetch products
  const response = await fetch('/api/products');
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
