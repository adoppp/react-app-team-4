import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './authThunk';

const REJECTED = (thunkAPI, e) => thunkAPI.rejectWithValue(e.message);

export const getDiaryInfo = createAsyncThunk(
    'diary/getInfo',
    async (date, thunkAPI) => {
        try {
            const response = await instance.get('diary/day', {
                params: { date: date }
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    },
);

export const getUser = createAsyncThunk(
    'user/getUser',
    async (user, thunkAPI) => {
        try {
            const response = await instance.get('user')
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);


export const deleteProduct = createAsyncThunk(
    'diary/deleteProduct',
    async ({ id, date }, thunkAPI) => {
        try {
            const payload = { date };
            const response = await instance.delete(`diary/product/${id}`, { data: payload });
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
            const response = await instance.delete(`diary/exercise/${id}`, { data: payload });
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const addProduct = createAsyncThunk(
    'diary/addProduct',
    async ({ id, date, weight }, thunkAPI) => {
        try {
            const payload = { date, weight };
            const response = await instance.patch(`diary/product/${id}`, payload);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const addExercise = createAsyncThunk(
    'diary/addExercise',
    async ({ id, date, time }, thunkAPI) => {
        try {
            const payload = { date, time };
            const response = await instance.patch(`diary/exercise/${id}`, payload);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);
