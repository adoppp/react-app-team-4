import { createSlice } from '@reduxjs/toolkit';
import {
    getDiaryInfo,
    deleteProduct,
    addProduct,
    deleteExercise,
    addExercise,
} from '../operations/diaryThunk';

export const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const initialState = {
    data: null,
    products: [],
    exercises: [],
    selectedDate: formatDate(new Date()),
};

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        updateSelectedDate(state, action) {
            state.selectedDate = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDiaryInfo.fulfilled, (state, action) => {
                if (action.payload.message === 'Day is empty') {
                    state.data = null;
                    state.products = [];
                    state.exercises = [];
                } else {
                    state.data = action.payload.days;
                    state.products = action.payload.days[0]?.products || [];
                    state.exercises = action.payload.days[0]?.exercises || [];
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                const productId = action.meta.arg.id;
                state.products = state.products.filter(
                    (product) => product.product._id !== productId,
                );
            })
            .addCase(deleteExercise.fulfilled, (state, action) => {
                const exerciseID = action.meta.arg.id;
                state.exercises = state.exercises.filter(
                    (exercise) => exercise.exercise._id !== exerciseID,
                );
            });
    },
});

export const { updateSelectedDate } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
