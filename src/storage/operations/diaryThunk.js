import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './authThunk';

const REJECTED = (thunkAPI, e) => thunkAPI.rejectWithValue(e.message);

export const getDiaryInfo = createAsyncThunk(
    'diary/getInfo',
    async (date, thunkAPI) => {
        try {
            const response = await instance.get('/diary/day', {
                data: { date }
            });
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);

export const deleteProduct = createAsyncThunk(
    'diary/deleteProduct',
    async ({ id, date }, thunkAPI) => {
        try {
            const payload = { id, date };
            const response = await instance.delete('/diary/product', { data: payload });
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const deleteExercise = createAsyncThunk(
    'diary/deleteExercise',
    async ({ id, date }, thunkAPI) => {
        try {
            const payload = { id, date };
            const response = await instance.delete('/diary/exercise', { data: payload });
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const addProduct = createAsyncThunk(
    'diary/addProduct',
    async ({ date, amount, calories }, thunkAPI) => {
        try {
            const payload = { date, amount, calories };
            const response = await instance.patch('/diary/product', payload);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const addExercise = createAsyncThunk(
    'diary/addExercise',
    async ({ date, amount, calories }, thunkAPI) => {
        try {
            const payload = { date, amount, calories };
            const response = await instance.patch('/diary/exercise', payload);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);