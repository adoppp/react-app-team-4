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
        userData: {
            avatarURL: '',
            verify: false,
        },
        userInfo: {},
    },
    email: '',
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
                state.email = action.payload.user.email;
                state.token = action.payload.token;
                state.verificationCode = action.payload.verificationCode;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.authenticated = true;
                state.userDetails.userData = action.payload.userData;
                state.userDetails.userInfo = action.payload.userInfo;
                state.token = action.payload.token;
                state.verificationCode = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.authenticated = false;
                state.userDetails.userData = {
                    verify: false,
                };
                state.userDetails.userInfo = {};
                state.token = null;
                state.verificationCode = null;
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
            });
    },
});

export const authReducer = authSlice.reducer;
