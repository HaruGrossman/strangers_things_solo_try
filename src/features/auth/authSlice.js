//in authSlice.js, inject register and login mutations into the central API slice. Make sure that shape of the body you send matches the shape described in the documentation. 

//import out slice headquarters api.jsx
import api from "../../store/api"

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