export const errorUserSelector = (state) => state.user.error;

export const loadingSelector = (state) => state.user.isLoading;

export const autheticatedSelector = (state) => state.user.authenticated;

export const tokenSelector = (state) => state.user.token;