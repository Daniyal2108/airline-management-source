import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import loginReducer from './slices/login';
import clientReducer from "./slices/client-slice"
import airplaneReducer from "./slices/airplane-data"

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({ 
    login: loginReducer,
    client: clientReducer,
    airplane: airplaneReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);

