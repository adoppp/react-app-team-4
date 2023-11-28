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
    verifyByVerificationCode,
    // getParameters,
} from '../operations/authThunk';
import {
    getProducts,
    getProductsCategories,
} from '../operations/productsThunk';
import {
    exercisesCategory,
    getAllExercises,
} from '../operations/exercisesThunk';
import {
    getDiaryInfo,
    deleteProduct,
    deleteExercise,
    addProduct,
    addExercise,
} from '../operations/diaryThunk';

const initialState = {
    isLoading: false,
};

const PENDING = (state) => {
    state.isLoading = true;
};

const FULFILLED = (state) => {
    state.isLoading = false;
};

const REJECTED = (state) => {
    state.isLoading = false;
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, PENDING)
            .addCase(registration.fulfilled, FULFILLED)
            .addCase(registration.rejected, REJECTED)

            .addCase(login.pending, PENDING)
            .addCase(login.fulfilled, FULFILLED)
            .addCase(login.rejected, REJECTED)

            .addCase(logout.pending, PENDING)
            .addCase(logout.fulfilled, FULFILLED)
            .addCase(logout.rejected, REJECTED)

            .addCase(refreshUser.pending, PENDING)
            .addCase(refreshUser.fulfilled, FULFILLED)
            .addCase(refreshUser.rejected, REJECTED)

            .addCase(getProducts.pending, PENDING)
            .addCase(getProducts.fulfilled, FULFILLED)
            .addCase(getProducts.rejected, REJECTED)

            .addCase(getProductsCategories.pending, PENDING)
            .addCase(getProductsCategories.fulfilled, FULFILLED)
            .addCase(getProductsCategories.rejected, REJECTED)

            .addCase(avatarUpdate.pending, PENDING)
            .addCase(avatarUpdate.fulfilled, FULFILLED)
            .addCase(avatarUpdate.rejected, REJECTED)

            .addCase(exercisesCategory.pending, PENDING)
            .addCase(exercisesCategory.fulfilled, FULFILLED)
            .addCase(exercisesCategory.rejected, REJECTED)

            .addCase(getAllExercises.pending, PENDING)
            .addCase(getAllExercises.fulfilled, FULFILLED)
            .addCase(getAllExercises.rejected, REJECTED)

            .addCase(infoUpdate.pending, PENDING)
            .addCase(infoUpdate.fulfilled, FULFILLED)
            .addCase(infoUpdate.rejected, REJECTED)

            .addCase(detailsUpdate.pending, PENDING)
            .addCase(detailsUpdate.fulfilled, FULFILLED)
            .addCase(detailsUpdate.rejected, REJECTED)

            .addCase(detailsCreate.pending, PENDING)
            .addCase(detailsCreate.fulfilled, FULFILLED)
            .addCase(detailsCreate.rejected, REJECTED)

            .addCase(getDiaryInfo.pending, PENDING)
            .addCase(getDiaryInfo.fulfilled, FULFILLED)
            .addCase(getDiaryInfo.rejected, REJECTED)

            .addCase(deleteProduct.pending, PENDING)
            .addCase(deleteProduct.fulfilled, FULFILLED)
            .addCase(deleteProduct.rejected, REJECTED)

            .addCase(deleteExercise.pending, PENDING)
            .addCase(deleteExercise.fulfilled, FULFILLED)
            .addCase(deleteExercise.rejected, REJECTED)

            .addCase(addProduct.pending, PENDING)
            .addCase(addProduct.fulfilled, FULFILLED)
            .addCase(addProduct.rejected, REJECTED)

            .addCase(addExercise.pending, PENDING)
            .addCase(addExercise.fulfilled, FULFILLED)
            .addCase(addExercise.rejected, REJECTED)

            .addCase(verifyByVerificationCode.pending, PENDING)
            .addCase(verifyByVerificationCode.fulfilled, FULFILLED)
            .addCase(verifyByVerificationCode.rejected, REJECTED);
    },
});

export const loadingReducer = loadingSlice.reducer;
