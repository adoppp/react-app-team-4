import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './authThunk';

const REJECTED = (thunkAPI, e) => thunkAPI.rejectWithValue(e.message);

export const getUserData= createAsyncThunk(
    'user/getData',
    async (thunkAPI) => {
        try {
            const response = await instance.get('/user');
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);

export const addUserData= createAsyncThunk(
    'user/addData',
    async (thunkAPI) => {
        try {
            const response = await instance.put('/user');
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);

export const editUserData= createAsyncThunk(
    'user/editData',
    async (thunkAPI) => {
        try {
            const response = await instance.patch('/user');
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);
