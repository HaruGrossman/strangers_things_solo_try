//because we created out store and api else where we can refactor this file
//import Post from "./Post";    ---not needed after adding router in main.jsx

//import out query we made in store
// import { useGetPostsQuery } from "./postSlice";    ---not needed after adding router in main.jsx

// after adding router to main.jsx
import { Link } from "react-router-dom";

//write out component 
function Posts({ post }) {
    return (
        <li>
            <h2>{post.title}</h2>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <Link to={`/posts/${post._id}`}>See Details</Link>
        </li>
    );
}
export default Posts


