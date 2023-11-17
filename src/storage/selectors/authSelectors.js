export const errorSelector = (state) => state.error.message;

export const loadingSelector = (state) => state.user.isLoading;

export const autheticatedSelector = (state) => state.user.authenticated;

export const tokenSelector = (state) => state.user.token;
