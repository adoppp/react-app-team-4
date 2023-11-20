import { createSlice } from '@reduxjs/toolkit';
import { exercisesCategory, getAllExercises } from '../operations/exercisesThunk';

const initialState = {
    data: null,
    authenticated: false,
    token: null,
    isLoading: false,
    error: null,
};

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(exercisesCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.data = action.payload;
                state.token = action.payload.token;
            })
            .addCase(getAllExercises.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.data = action.payload;
                state.token = action.payload.token;
            })
    },
});

export const exercisesReducer = exercisesSlice.reducer;