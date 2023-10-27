// fetches an array of posts from the API and renders each post as a <Post>. This is done with useState, useEffect, and fetch

//since we are using useEffect and useState they need to be imported first
import { useEffect, useState } from "react";
//import the single post 
import Post from "./Post";

//write out component 
function Posts() {
    const [posts, setPosts] = useState([]); //set up useState

    //fetch activities from the API when the component mounts
    useEffect(() => {
        const fetchPosts = async () => { //setting up out api pull location info /async because we are waiting for out request to be answered
            const COHORT = "2309-FSA-ET-WEB-FT-SF";
            const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`; //using `` so we can use ${}
            response = await fetch(`${API_URL}/posts`);
            json = await response.json();

            setPosts(json.data.posts); // we are filling in out useState setPosts with the fetched extracted array of posts
        };
        fetchPosts();// call our function
    }, []); //empty endpoint array
    return ( //closing our Posts function using the array of posts we got from fetchPosts and mapping over them
        <ul>
            {posts.map((post) => (
                <Post Key={post._id} post={post} />
            ))}
        </ul>
    )
}


