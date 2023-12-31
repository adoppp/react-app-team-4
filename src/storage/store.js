import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { authReducer } from './reducers/authSlice';
import { errorReducer } from './reducers/errorSlice';
import { loadingReducer } from './reducers/loadingSlice';
import { productsReducer } from './reducers/productsSlice';
import { exercisesReducer } from './reducers/exercisesSlice';
import { diaryReducer } from './reducers/diarySlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'verificationCode', 'email', 'userDetails'],
};

export const store = configureStore({
    reducer: {
        user: persistReducer(authPersistConfig, authReducer),
        error: errorReducer,
        loading: loadingReducer,
        products: productsReducer,
        exercises: exercisesReducer,
        diary: diaryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
