//because we created out store and api else where we can refactor this file
import Post from "./Post";
//import out query we made in store
import { useGetPostsQuery } from "./postSlice";

//write out component 
function Posts() {
    const { data: posts } = useGetPostsQuery();

    return (
        <ul>
            {posts.map((post) => (
                { posts?.map((post) => ( //if there is something of posts to map, then map
                    <Post key={post._id} post={post} />
                ))}
            ))}
        </ul>
    );
}


