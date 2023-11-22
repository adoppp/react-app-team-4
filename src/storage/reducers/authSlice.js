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
    userDetails: {
        userData: { avatarURL: '' },
        userInfo: {},
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
                state.userDetails.userData = {
                    ...action.payload,
                };
                state.userDetails.userParameters = {
                    dailyCalories: 0,
                    dailyExerciseTime: 0,
                };
                state.token = action.payload.token;
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
                state.userDetails.userData.avatarURL = action.payload;
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
    },
});

export const authReducer = authSlice.reducer;