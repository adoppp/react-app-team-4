import { createSlice } from '@reduxjs/toolkit';

import {
    registration,
    login,
    logout,
    refreshUser,
    avatarUpdate,
    infoUpdate,
} from '../operations/authThunk';

const initialState = {
    userData: {
        avatarURL: '',
        height: 0,
        currentWeight: 0,
        desiredWeight: 0,
        birthday: '',
        blood: '',
        sex: '',
        levelActivity: 0,
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
                    avatarURL: '',
                    height: 0,
                    currentWeight: 0,
                    desiredWeight: 0,
                    birthday: '',
                    blood: '',
                    sex: '',
                    levelActivity: 0,
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
            .addCase(infoUpdate.fulfilled, (state, action) => {
                state.userData = action.payload;
            })
    },
});

export const authReducer = authSlice.reducer;