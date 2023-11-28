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
    verifyOneMore,
    verifyByVerificationCode,
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
    message: null,
    notificationMessage: null,
    isError: false,
};

const REJECTED = (state, action) => {
    state.message = action.payload;
};

const PENDING = (state) => {
    state.message = null;
};

const REJECTEDverify = (state, action) => {
    state.notificationMessage = action.payload;
    state.isError = true;
};

const PENDINGverify = (state) => {
    state.notificationMessage = null;
    state.isError = false;
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
            .addCase(detailsCreate.rejected, REJECTED)

            .addCase(getDiaryInfo.pending, PENDING)
            .addCase(getDiaryInfo.rejected, REJECTED)

            .addCase(deleteProduct.pending, PENDING)
            .addCase(deleteProduct.rejected, REJECTED)

            .addCase(deleteExercise.pending, PENDING)
            .addCase(deleteExercise.rejected, REJECTED)

            .addCase(addProduct.pending, PENDING)
            .addCase(addProduct.rejected, REJECTED)

            .addCase(addExercise.pending, PENDING)
            .addCase(addExercise.rejected, REJECTED)

            .addCase(verifyOneMore.pending, PENDINGverify)
            .addCase(verifyOneMore.fulfilled, (state) => {
                state.notificationMessage = 'Successful resubmission';
                state.isError = false;
            })
            .addCase(verifyOneMore.rejected, REJECTEDverify)

            .addCase(verifyByVerificationCode.pending, PENDING)
            .addCase(verifyByVerificationCode.rejected, REJECTED);
    },
});

export const errorReducer = errorSlice.reducer;
