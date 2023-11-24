import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './authThunk';

const REJECTED = (thunkAPI, e) =>
    thunkAPI.rejectWithValue(
        e.response.data.message ? e.response.data.message : e.message,
    );

export const getAllExercises = createAsyncThunk(
    'getAll/exercises',
    async (data, thunkAPI) => {
        try {
            const response = await instance.get('exercises', data);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);

export const exercisesCategory = createAsyncThunk(
    'getAll/category',
    async (data, thunkAPI) => {
        try {
            const response = await instance.get('exercises/filters', data);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);
