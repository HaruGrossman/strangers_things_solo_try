import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//import the store, and provider
import store from './store/store.js'
import { Provider } from 'react-redux'

//create a router in main.jsx with "/", "/posts" rendering "<PostPage>"
//"/posts/:id" render <PostPage>
// this will make it unnessary to have the App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostDetails from "./features/posts/PostDetails";
import PostPage from "./features/posts/PostPage";

const router = createBrowserRouter([
  { path: "/" || "/posts", element: <PostPage /> }
  { path: "/posts/:id", element: <PostDetails /> }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
