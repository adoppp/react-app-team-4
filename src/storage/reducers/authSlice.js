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
    verifyByVerificationCode,
} from '../operations/authThunk';

const initialState = {
    userDetails: {
        userData: { avatarURL: '' },
        userInfo: {},
    },
    authenticated: false,
    token: null,
    verificationCode: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.userDetails.userData = {
                    ...action.payload.user,
                };
                state.token = action.payload.token;
                state.verificationCode = action.payload.verificationCode;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.authenticated = true;
                state.userDetails = action.payload;
                state.token = action.payload.token;
            })
            .addCase(logout.fulfilled, (state) => {
                state.authenticated = false;
                state.userDetails.userData = {
                    avatarURL: '',
                };
                state.userDetails.userInfo = {};
                state.userDetails.userParameters = {
                    dailyCalories: 0,
                    dailyExerciseTime: 0,
                };
                state.token = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.authenticated = true;
                state.userDetails = action.payload;
            })
            .addCase(avatarUpdate.fulfilled, (state, action) => {
                state.userDetails.userData.avatarURL = action.payload.avatarURL;
            })
            .addCase(infoUpdate.fulfilled, (state, action) => {
                state.userDetails.userData.name = action.payload.name;
            })
            .addCase(detailsUpdate.fulfilled, (state, action) => {
                state.userDetails.userInfo = {
                    ...state.userDetails.userInfo,
                    ...action.payload,
                };
            })
            .addCase(detailsCreate.fulfilled, (state, action) => {
                state.userDetails.userInfo = action.payload;
            })
            .addCase(verifyByVerificationCode.fulfilled, (state, action) => {
                state.userDetails.userData.verify = action.payload.verify;
            })
    },
});

export const authReducer = authSlice.reducer;