export const autheticatedSelector = (state) => state.user.authenticated;

export const tokenSelector = (state) => state.user.token;

export const avatarSelector = (state) => state.user.userData.avatarURL;
