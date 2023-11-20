import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getProductsCategories } from '../operations/productsThunk.js';

 const initialState = {
   products: {
    items: [],
    isLoading: false,
    error: null
     },
   categories: {
    list: [],
    isLoading: false,
    error: null
   },
     filter: {
    category: 'All',
  },
};

const productsSlice = createSlice({
    name: 'products',
  initialState,
     reducers: {
    setCategoryFilter: (state, action) => {
      state.filter.category = action.payload;
    },
  },
    extraReducers: (builder) => {
        builder
           .addCase(getProducts.fulfilled, (state, action) => {
                state.products.items = action.payload;
            })
            
            .addCase(getProductsCategories.fulfilled, (state, action) => { 
                 state.categories.list = action.payload;
            })
    }
});
export const { setCategoryFilter } = productsSlice.actions;
export const selectorProducts = state => state.products.products;
export const selectorCategories = state => state.products.categories;
export const selectorFilter = (state) => state.products.filter;

export const productsReducer = productsSlice.reducer;