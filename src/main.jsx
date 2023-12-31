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
//after adding Root.jsx
import Root from './layout/Root'
import Register from "./features/auth/Register" //import after creation and adding to nav
import Login from './features/auth/Login' //import after creation and adding to nav

const router = createBrowserRouter([
  { //make the cutin and children after Root.jsx in created and imported
    path: "/",
    element: <Root />,
    children: [
      { path: "/" || "/posts", element: <PostPage /> },
      { path: "/posts/:id", element: <PostDetails /> },
      { path: "/register", element: <Register /> }, //added after creating register.jsx and added to navbar
      { path: "/login", element: <Login /> } //add after creating login.jsx and added to navbar
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
