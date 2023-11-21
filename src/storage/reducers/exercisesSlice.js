import { createSlice } from '@reduxjs/toolkit';
import {
    exercisesCategory,
    getAllExercises,
} from '../operations/exercisesThunk';

const initialState = {
    data: null,
};

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(exercisesCategory.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getAllExercises.fulfilled, (state, action) => {
                state.data = action.payload;
            });
    },
});

export const exercisesReducer = exercisesSlice.reducer;
