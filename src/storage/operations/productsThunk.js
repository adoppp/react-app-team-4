import { instance } from './authThunk.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getAll',
    async ({ query='', category='', recommend=null, page }, thunkAPI) => {
        try {
            const response = await instance.get(
                `/products?keyword=${query}&category=${category}&recommend=${recommend}&page=${page}&limit=20`,
                );
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
