import { createSlice } from '@reduxjs/toolkit';

import {
    registration,
    login,
    logout,
    refreshUser,
    avatarUpdate,
    infoUpdate,
    detailsUpdate,
    detailsCreate,
} from '../operations/authThunk';
import {
    getProducts,
    getProductsCategories,
} from '../operations/productsThunk';
import {
    exercisesCategory,
    getAllExercises,
} from '../operations/exercisesThunk';

const initialState = {
    message: null,
};

const REJECTED = (state, action) => {
    state.message = action.payload;
};

const PENDING = (state) => {
    state.message = null;
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, PENDING)
            .addCase(registration.rejected, REJECTED)

            .addCase(login.pending, PENDING)
            .addCase(login.rejected, REJECTED)

            .addCase(logout.pending, PENDING)
            .addCase(logout.rejected, REJECTED)

            .addCase(refreshUser.pending, PENDING)
            .addCase(refreshUser.rejected, REJECTED)

            .addCase(getProducts.pending, PENDING)
            .addCase(getProducts.rejected, REJECTED)

            .addCase(getProductsCategories.pending, PENDING)
            .addCase(getProductsCategories.rejected, REJECTED)

            .addCase(avatarUpdate.pending, PENDING)
            .addCase(avatarUpdate.rejected, REJECTED)

            .addCase(infoUpdate.pending, PENDING)
            .addCase(infoUpdate.rejected, REJECTED)

            .addCase(getAllExercises.pending, PENDING)
            .addCase(getAllExercises.rejected, REJECTED)

            .addCase(exercisesCategory.pending, PENDING)
            .addCase(exercisesCategory.rejected, REJECTED)

            .addCase(detailsUpdate.pending, PENDING)
            .addCase(detailsUpdate.rejected, REJECTED)

            .addCase(detailsCreate.pending, PENDING)
            .addCase(detailsCreate.rejected, REJECTED);
    },
});

export const errorReducer = errorSlice.reducer;
