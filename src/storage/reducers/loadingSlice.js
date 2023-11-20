import { createSlice } from "@reduxjs/toolkit";

import {
    registration,
    login,
    logout,
    refreshUser,
} from '../operations/authThunk';
import { getProducts, getProductsCategories } from "../operations/productsThunk";

const initialState = {
    isLoading: false,
};

const PENDING = (state) => {
    state.isLoading = true;
};

const FILFILLED = (state) => {
    state.isLoading = false;
}

const REJECTED = (state) => {
    state.isLoading = false;
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, PENDING)
            .addCase(registration.fulfilled, FILFILLED)
            .addCase(registration.rejected, REJECTED)

            .addCase(login.pending, PENDING)
            .addCase(login.fulfilled, FILFILLED)
            .addCase(login.rejected, REJECTED)

            .addCase(logout.pending, PENDING)
            .addCase(logout.fulfilled, FILFILLED)
            .addCase(logout.rejected, REJECTED)

            .addCase(refreshUser.pending, PENDING)
            .addCase(refreshUser.fulfilled, FILFILLED)
            .addCase(refreshUser.rejected, REJECTED)
        
            .addCase(getProducts.pending, PENDING)
            .addCase(getProducts.fulfilled, FILFILLED)
            .addCase(getProducts.rejected, REJECTED)
            
            .addCase(getProductsCategories.pending, PENDING)
            .addCase(getProductsCategories.fulfilled, FILFILLED)
            .addCase(getProductsCategories.rejected, REJECTED)
    },
});

export const loadingReducer = loadingSlice.reducer;