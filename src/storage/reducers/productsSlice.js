import { createSlice } from '@reduxjs/toolkit';
import {
    getProducts,
    getProductsCategories,
} from '../operations/productsThunk.js';

const initialState = {
    param:{
        query:'',
        page: 1,
        recommend: null,
        category: '',
    },
    products: {
        items: [],
    },
    categories: {
        list: [],
    },
    filter: {
        category: '',
    },
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategoryFilter: (state, action) => {
            state.categories.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                    state.products.items = action.payload.products;

                    state.param.query = action.meta.arg.query
                    state.param.page = action.meta.arg.page;
                    state.param.recommend = action.meta.arg.recommend
                    state.param.category = action.meta.arg.category
            })
            .addCase(getProductsCategories.fulfilled, (state, action) => {
                state.categories.list = action.payload;
            })
    },
});
export const { setCategoryFilter } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
