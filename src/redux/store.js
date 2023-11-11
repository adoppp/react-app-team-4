// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./redusers/contactsSlice";
// import { filterReducer } from "./redusers/filterSlice";
// import { authReducer } from "./redusers/authSlice";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer,
//          persistStore,
//          FLUSH,
//          REHYDRATE,
//          PAUSE,
//          PERSIST,
//          PURGE,
//          REGISTER,
// } from 'redux-persist';

// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token']
//   }

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//         user: persistReducer(authPersistConfig, authReducer),
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store)
