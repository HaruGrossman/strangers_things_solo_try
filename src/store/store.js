import { configureStore } from "@reduxjs/toolkit";
import api from "./api"; //from api.js
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import authReducer from "../features/auth/authSlice"; // after adding auth in authSlice


const store = configureStore({ //configuring our store for export
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer//the additional "auth" key here should batch the name of the authSlice
    },
    middleware: (curryGetDefaultMiddleware) =>
        curryGetDefaultMiddleware().concat(api.middleware),
})

export default store;