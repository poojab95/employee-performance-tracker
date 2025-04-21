import { configureStore } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import employeeReducer from "../slices/employeeSlice";
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['employee'],
};
const rootReducer = combineReducers({
    employee: employeeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor, store };