import { createSlice } from '@reduxjs/toolkit';

import {
    registration,
    login,
    logout,
    refreshUser,
    avatarUpdate,
} from '../operations/authThunk';

const initialState = {
    userData: {
        avatarURL:'',
    },
    authenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logout.fulfilled, (state) => {
                state.authenticated = false;
                state.userData = {
                    name:'',
                    email:'',
                    avatarURL:'',
                };
                state.token = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.authenticated = true;
                state.userData = action.payload;
            })
            .addCase(avatarUpdate.fulfilled, (state, action) => {
                state.userData.avatarURL = action.payload;
            })
    },
});

export const authReducer = authSlice.reducer;