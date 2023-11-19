import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../operations/productsThunk.js';

 const initialState = {
 products: {
    items: [],
    isLoading: false,
    error: null
  }
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, state => {
                state.products.isLoading = true;
                state.products.error = null;
            }).addCase(getProducts.fulfilled, (state, action) => {
                state.products.isLoading = false;
                state.products.items = action.payload;
            }).addCase(getProducts.rejected, (state, action) => {
                state.products.isLoading = false;
                state.products.error = action.payload;

            })
    }
})