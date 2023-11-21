import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://powerpulse-171j.onrender.com/api/',
});

export const token = {
    set: (token) => {
        instance.defaults.headers['Authorization'] = `Bearer ${token}`;
    },
    clear: () => {
        instance.defaults.headers['Authorization'] = '';
    },
};

const REJECTED = (thunkAPI, e) => thunkAPI.rejectWithValue(e.message);

export const registration = createAsyncThunk(
    'auth/registration',
    async (userData, thunkAPI) => {
        try {
            const response = await instance.post('auth/signup', userData);
            token.set(response.data.token);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);

export const login = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const response = await instance.post('auth/signin', userData);
            token.set(response.data.token);
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await instance.post('auth/logout');
        token.clear();
        return response.data;
    } catch (e) {
        return REJECTED(thunkAPI, e);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const userToken = state.user.token;
        
        try {
            token.set(userToken);

            const response = await instance.get('auth/current');
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    },
);

export const avatarUpdate = createAsyncThunk(
    'auth/avatar',
    async (avatar, thunkAPI) => {
        try {
            const response = await instance.patch('auth/avatar', avatar)
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const infoUpdate = createAsyncThunk(
    'user/infoUpdate',
    async (user, thunkAPI) => {
        try {
            const response = await instance.patch('user/info', user)
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const detailsUpdate = createAsyncThunk(
    'user/detailsUpdate',
    async (user, thunkAPI) => {
        try {
            const response = await instance.patch('user', user)
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);

export const detailsCreate = createAsyncThunk(
    'user/detailsCreate',
    async (user, thunkAPI) => {
        try {
            const response = await instance.post('user', user)
            return response.data;
        } catch (e) {
            return REJECTED(thunkAPI, e);
        }
    }
);