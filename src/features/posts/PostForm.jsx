// create a "PostForm" which will allow users to make a new post. This component should be displayed in "PostPage" only if the user is logged in. When submitted, the new post should automatically appear in the list of posts
import { useState } from "react";
import { useCreatePostMutation } from "./postSlice";

function PostForm() {
    //set up our usestate's
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [createPost] = useCreatePostMutation();
    const tryCreatePost = (event) => {
        event.preventDefault();

        const post = { title, description, price };
        createPost(post);
    };

    return (
        <form onSubmit={tryCreatePost}>
            <h1>Create a Post</h1>
            <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </label>
            <label>
                Description
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription}
                />
            </label>
            <label>
                Price
                <input
                    type="text"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
            </label>
            <button>Create</button>
        </form>
    );
}

export default PostForm