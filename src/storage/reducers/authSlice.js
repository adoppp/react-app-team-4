import { createSlice } from '@reduxjs/toolkit';

import { registration, login } from '../operations/authThunk';


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
                console.log(action.payload)
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.userData = action.payload;
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
        // .addCase(logoutThunk.pending, PENDING)
        // .addCase(logoutThunk.fulfilled, (state) => {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.authenticated = false;
        //     state.userData = null;
        //     state.token = null;
        // })
        // .addCase(logoutThunk.rejected, REJECTED)
        // .addCase(refreshUserThunk.pending, PENDING)
        // .addCase(refreshUserThunk.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.authenticated = true;
        //     state.userData = action.payload;
        // })
        // .addCase(refreshUserThunk.rejected, REJECTED)
    }
});

export const authReducer = authSlice.reducer;