// Create a new component, which shows all properties of a post rom the API.
//note: the API does not have an endpoint to get the details of a single post. Instead, use find to search for the corresponding post from the getPosts query.

//import our useParams, and our query
import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "./postSlice";

function PostDetails() {
    const { id } = useParams(); //grab the ID from the route via useParams
    const { data: posts } = useGetPostsQuery();

    const post = posts?.find((post) => post._id === id);

    if (!post) { // 
        return <p>Post not found</p>
    }
    {/* if there is a post found */ }
    return (
        < div >
            <h2>{post.title}</h2>
            <p>Description: {post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <p>Author: {post.author.username}</p>
            <p>Will Deliver: {post.willDeliver ? "Yes" : "No"}</p>
        </div >
    )
}

export default PostDetails