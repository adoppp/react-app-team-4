import { instance } from './authThunk.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getAll',
    async (query, thunkAPI) => {
        try {
            const response = await instance.get(`/products?keyWord=${query}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(
                e.response.data.message ? e.response.data.message : e.message,
            );
        }
    },
);

export const getProductsCategories = createAsyncThunk(
    'products/categories',
    async (_, thunkAPI) => {
        try {
            const response = await instance.get('/products/categories');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(
                e.response.data.message ? e.response.data.message : e.message,
            );
        }
    },
);
