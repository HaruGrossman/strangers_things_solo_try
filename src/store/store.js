import { configureStore } from "@reduxjs/toolkit";
import api from "./api"; //from api.js
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({ //configuring our store for export
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (curryGetDefaultMiddleware) =>
        curryGetDefaultMiddleware().concat(api.middleware),
})

export default store;