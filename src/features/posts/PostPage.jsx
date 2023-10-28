// currently displays only <Posts>, but we will add to it later.

// pulling in out Posts for access to the mapped array
import Posts from "./Posts";
// import out useSelector, selectToken, and PostForm.jsx(just made)
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import PostForm from "./PostForm";

function PostPage() {
    const token = useSelector(selectToken);

    //the function showing how we want our cards displayed
    return (
        <>
            {token && <PostForm />}  {/* only works if both token and PostForm present */}
            <h1>Posts</h1>
            <Posts />
        </>
    )
}
export default PostPage