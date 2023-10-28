//in authSlice.js, inject register and login mutations into the central API slice. Make sure that shape of the body you send matches the shape described in the documentation. 

//import out slice headquarters api.jsx
import api from "../../store/api"
import { createSlice } from "@reduxjs/toolkit";//create a slice to store the JWT


const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: "/users/register",
                method: "POST",
                body: { user: credentials }
            })
        }),
        login: (builder) => ({
            query: (credentials) => ({
                url: "/users/login",
                method: "POST",
                body: { user: credentials }
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi; // send out our deconstructed items


//the initial state should grab the token from the sessionStorage
//define extraReducers so that when wither mutation is fulfilled, the token is grabbed from the payload and stored in both state and sessionStorage
//export a selector to select the token
//connect the slice to the store

//this key is used to store the token in the browser's sessionStorage
const TOKEN_KEY = "TOKEN";

//this function is used only as an extraReducer to store the token in states and session storage
// @param state - the current state of the slice
// @param payload - the response sent back from the API
const storeToken = (state, { payload }) => {
    //the documentation tells us how to access the token from the payload
    state.token = payload.data.token;
    sessionStorage.setItem(TOKEN_KEY, payload.data.token);
};
//we use a slice to keep track of the token
const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: sessionStorage.getItem(TOKEN_KEY),
    },
    //add a "logout" reducer to the authSlice; when dispatched, the "logout" action should set the token in state to "null" and remove the token from sessionStorage
    reducers: {
        logout: (state) => {
            state.token = null;
            sessionStorage.removeItem(TOKEN_KEY);
        }
    }

    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
        builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
    },
});

//the 'auth' key here should match the name of the authSlice
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;