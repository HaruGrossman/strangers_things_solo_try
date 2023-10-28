# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Overview
We will be using the Stranger's Things API. By then end of this activity, you should have a fully working React app that uses React Router and RTK Query! You'll also have a working authentication flow.

Instructions
This repo already contains the final solution. Each commit corresponds to a step in the instructions below. Try to do each step on your own, and then refer to the commit to double check your work before moving on.

Simple React App
Use npm create vite@latest strangers_things to create a new Vite project named strangers_things.
Choose React and JavaScript + SWC.
In src/features/posts, create three components:
<Posts> fetchs an array of posts from the API and renders each post as a <Post>. This is done with useState, useEffect, and fetch.
<Post> should display only the name, price, and description.
<PostPage> currently displays only <Posts>, but we will add to it later.
Update <App> to render just <PostPage>.
Refactor to RTK Query
Install RTK Toolkit by running npm install react-redux @reduxjs/toolkit.
In src/store, create an empty Redux store. Create a central API slice and connect it to the store.
Provide the store to the app in main.jsx.
In src/features/posts, create postSlice.js and inject a getPosts query to the central API slice.
Refactor Posts.jsx to use RTK Query to get the data from the API instead of useState and useEffect.
Adding Routes
Install React Router by running npm install react-router-dom.
Create a new PostDetails component, which shows all properties of a post from the API.
Grab the ID from the route via useParams.
Note: the API does not have an endpoint to get the details of a single post. Instead, use find to search for the corresponding post from the getPosts query.
Create a router in main.jsx with three routes:
Both / and /posts should render <PostPage>
/posts/:id should render <PostDetails>.
Change main.jsx to render <RouterProvider> instead of <App>.
Update <Post> to include a <Link> to the corresponding <PostDetails> route.
In src/layout, create a <Root> component with an <Outlet>. This will serve as the main template for the app. Refactor the router in main.jsx so that the existing routes become the children of <Root>.
Create a <Navbar> with a single link to /posts. This should be rendered inside <Root>.
Adding Authentication
In src/features/auth, create a new <Register> component. Add a /register route to the router in main.jsx, as well as a new link in <Navbar>.
This component should be a controlled form. Read the documentation to figure out which fields you'll need.
We'll write the form submission handler later.
Create a <Login> component as well with corresponding routes. It should be almost identical to <Register>.
In authSlice.js, inject register and login mutations into the central API slice. Make sure that shape of the body you send matches the shape described in the documentation.
In the same file, create a slice to store the JWT.
The initial state should grab the token from sessionStorage.
Define extraReducers so that when either mutation is fulfilled, the token is grabbed from the payload and stored in both state and sessionStorage.
Export a selector to select the token.
Connect the slice to the store.
Add a logout reducer to the authSlice; when dispatched, the logout action should set the token in state to null and remove the token from sessionStorage.
Update <Register> and <Login> to send credentials via respective mutation when the form is submitted. If successful, navigate the user back to the home page.
Use unwrap to catch the error - otherwise, the user will always be redirected.
At this point, the token should be stored in state and sessionStorage on a successful registration or login. Confirm this by looking at Redux DevTools and your browser inspector.
Using Authentication
In src/store/api.js, inject the token into the headers of every request via prepareHeaders.
Update <Navbar> so that it shows the "register" and "login" links only if the user is not logged in. If the user is logged in, a "logout" button should be displayed instead.
A user is logged in if a token exists in state.
When clicked, the logout button should dispatch the logout action.
The user should be redirected to the home page after logging out.
Add a createPost mutation to postSlice. Since this will mutate the posts in the API's database, it should invalidate the "Posts" tag. getPosts should provide the "Posts" tag.
In features/posts, create a <PostForm> component, which will allow users to make a new post. This component should be displayed in <PostPage> only if the user is logged in. When submitted, the new post should automatically appear in the list of posts!
Extensions
If you are done early, you can work on the following:

Style the app; try using a preprocessor like Sass!
Add searching and filtering to the main list of posts
Allow logged in users to delete posts they've created
Allow a user to leave a message on a post that someone else created
Display messages under posts that the user created
Add an account page to show all of the posts the user has created, along with the attached messages