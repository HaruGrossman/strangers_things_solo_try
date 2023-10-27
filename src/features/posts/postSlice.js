//create postSlice.js and inject a getPosts query to the central API slice.
import api from "../../store/api"; //importing the store we made

const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
            //notes from instructors
            //We transform this according to the shape of the data that the API sends back.
            //This matches what we passed into "setPosts" in Posts.jsx
            //before the refactor to RTK Query.
            transformResponse: (response) => response.data.posts,
        }),
    }),
});

export const { useGetPostsQuery } = postsApi; //we are breaking down the function and getting exactly what we want out