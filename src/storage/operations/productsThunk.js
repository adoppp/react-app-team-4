import { instance } from './authThunk.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getAll',
    async ({ inputValue, category, isRecommended }, thunkAPI) => {
        try {
            const response = await instance.get(
                `/products?keyword=${inputValue}&category=${category}&recommend=${isRecommended}`,
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(
                e.response.data.message ? e.response.data.message : e.message,
            );
        }
    },
);

export const getProductsOfBlood = createAsyncThunk(
    'products/getBood',
    async (query, thunkAPI) => {
        try {
            const response = await instance.get(`/products?blood=${query}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
export const getProductsOfBloodNotRecommended = createAsyncThunk(
    'products/getBoodNot',
    async (query, thunkAPI) => {
        try {
            const response = await instance.get(`/products?blood=${query}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
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
