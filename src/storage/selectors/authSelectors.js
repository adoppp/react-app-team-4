export const autheticatedSelector = (state) => state.user.authenticated;

export const tokenSelector = (state) => state.user.token;

export const avatarSelector = (state) => state.user.userData.avatarURL;

export const userSelector = (state) => state.user.userData;