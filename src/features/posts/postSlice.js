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
            //add a "createPost" mutation to "postSlice". Since this will mutate the posts in the API's database, it should invalidate the "Posts" tag. "getPosts" should provide the "Posts" tag.
            providesTags: ["Posts"],
        }),
        createPost: builder.mutation({
            query: (post) => ({
                url: `/posts`,
                method: "POST",
                body: { post },
            }),
            invalidatesTags: ["Posts"],
        })
    }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi; //we are breaking down the function and getting exactly what we want out