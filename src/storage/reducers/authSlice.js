import { createSlice } from '@reduxjs/toolkit';

import {
    registration,
    login,
    logout,
    refreshUser,
    avatarUpdate,
    infoUpdate,
    detailsUpdate,
    detailsCreate,
} from '../operations/authThunk';

const initialState = {
    userData: {
        avatarURL: '',
    },
    userInfo: {},
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
                    avatarURL: '',
                };
                state.userInfo = {};
                state.token = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.authenticated = true;
                state.userData = action.payload;
            })
            .addCase(avatarUpdate.fulfilled, (state, action) => {
                state.userData.avatarURL = action.payload;
            })
            .addCase(infoUpdate.fulfilled, (state, action) => {
                state.userData.name = action.payload.name;
            })
            .addCase(detailsUpdate.fulfilled, (state, action) => {
                state.userInfo = {...state.userInfo, ...action.payload};
            })
           .addCase(detailsCreate.fulfilled, (state, action) => {
                state.userInfo = (action.payload);
            })
    },
});

export const authReducer = authSlice.reducer;