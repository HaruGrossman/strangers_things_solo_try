// currently displays only <Posts>, but we will add to it later.

// pulling in out Posts for access to the mapped array
import Posts from "./Posts"

function PostPage() { //the function showing how we want our cards displayed
    return (
        <>
            <h1>Posts</h1>
            <Posts />
        </>
    )
}
export default PostPage