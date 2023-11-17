import { createSlice } from '@reduxjs/toolkit';

import {
    registration,
    login,
    logout,
    refreshUser,
} from '../operations/authThunk';

const initialState = {
    userData: null,
    authenticated: false,
    token: null,
    isLoading: false,
    error: null,
};

const PENDING = (state) => {
    state.isLoading = true;
    state.error = null;
};

const REJECTED = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, PENDING)
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registration.rejected, REJECTED)
            .addCase(login.pending, PENDING)
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, REJECTED)
            .addCase(logout.pending, PENDING)
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = false;
                state.userData = null;
                state.token = null;
            })
            .addCase(logout.rejected, REJECTED)
            .addCase(refreshUser.pending, PENDING)
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.userData = action.payload;
            })
            .addCase(refreshUser.rejected, REJECTED);
    },
});

export const authReducer = authSlice.reducer;
