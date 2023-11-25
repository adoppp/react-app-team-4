import { createSlice } from '@reduxjs/toolkit';
import {
    getProducts,
    getProductsCategories,
    getProductsOfBlood,
    getProductsOfBloodNotRecommended,
} from '../operations/productsThunk.js';

const initialState = {
    products: {
        items: [],
        filterCategory: [],
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
                state.products.filterCategory = action.payload;
            })

            .addCase(getProductsOfBlood.fulfilled, (state, action) => {
                state.products.items = action.payload.recommendedProducts;
            })
            .addCase(
                getProductsOfBloodNotRecommended.fulfilled,
                (state, action) => {
                    state.products.items =
                        action.payload.notRecommendedProducts;
                },
            )

            .addCase(getProductsCategories.fulfilled, (state, action) => {
                state.categories.list = action.payload;
            });
    },
});
export const { setCategoryFilter } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
