export const autheticatedSelector = (state) => state.user.authenticated;

export const tokenSelector = (state) => state.user.token;

export const avatarSelector = (state) =>
    state.user.userDetails.userData.avatarURL;

export const userSelector = (state) => state.user.userDetails.userData;

export const userInfoSelector = (state) => state.user.userDetails.userInfo;

export const userVerifySelector = (state) =>
    state.user.userDetails.userData.verify;

export const errorVerifySelector = (state) => state.error.notificationMessage;

export const isErrorVerifySelector = (state) => state.error.isError;

export const verificationCodeSelector = (state) => state.user.verificationCode;
