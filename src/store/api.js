// create an empty Redux store. Create a central API slice and connect it to the store
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT = "2309-FSA-ET-WEB-FT-SF"; //just like in Posts.jsx
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`; //just like in Posts.jsx

// this is the central API slice into which all endpoint will be injected (slice headquarters)
const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({}),
});

export default api; //exporting the slice headquarters we just made, to be imported in store.js