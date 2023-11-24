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

const FILFILLED = (state) => {
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

            .addCase(avatarUpdate.pending, PENDING)
            .addCase(avatarUpdate.fulfilled, FILFILLED)
            .addCase(avatarUpdate.rejected, REJECTED)

            .addCase(exercisesCategory.pending, PENDING)
            .addCase(exercisesCategory.fulfilled, FILFILLED)
            .addCase(exercisesCategory.rejected, REJECTED)

            .addCase(getAllExercises.pending, PENDING)
            .addCase(getAllExercises.fulfilled, FILFILLED)
            .addCase(getAllExercises.rejected, REJECTED)

            .addCase(infoUpdate.pending, PENDING)
            .addCase(infoUpdate.fulfilled, FILFILLED)
            .addCase(infoUpdate.rejected, REJECTED)

            .addCase(detailsUpdate.pending, PENDING)
            .addCase(detailsUpdate.fulfilled, FILFILLED)
            .addCase(detailsUpdate.rejected, REJECTED)

            .addCase(detailsCreate.pending, PENDING)
            .addCase(detailsCreate.fulfilled, FILFILLED)
            .addCase(detailsCreate.rejected, REJECTED)

            .addCase(getDiaryInfo.pending, PENDING)
            .addCase(getDiaryInfo.fulfilled, FILFILLED)
            .addCase(getDiaryInfo.rejected, REJECTED)

            .addCase(deleteProduct.pending, PENDING)
            .addCase(deleteProduct.fulfilled, FILFILLED)
            .addCase(deleteProduct.rejected, REJECTED)

            .addCase(deleteExercise.pending, PENDING)
            .addCase(deleteExercise.fulfilled, FILFILLED)
            .addCase(deleteExercise.rejected, REJECTED)

            .addCase(addProduct.pending, PENDING)
            .addCase(addProduct.fulfilled, FILFILLED)
            .addCase(addProduct.rejected, REJECTED)

            .addCase(addExercise.pending, PENDING)
            .addCase(addExercise.fulfilled, FILFILLED)
            .addCase(addExercise.rejected, REJECTED)

            .addCase(verifyByVerificationCode.pending, PENDING)
            .addCase(verifyByVerificationCode.fulfilled, FILFILLED)
            .addCase(verifyByVerificationCode.rejected, REJECTED);

        // .addCase(getParameters.pending, PENDING)
        // .addCase(getParameters.fulfilled, FILFILLED)
        // .addCase(getParameters.rejected, REJECTED)
    },
});

export const loadingReducer = loadingSlice.reducer;
