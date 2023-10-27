//Update <App> to render just <postPage>

//import the css and the components we want
import './App.css';
import PostPage from './features/posts/PostPage';

function App() {
  return <PostPage />; //put whatever is returned in PostPage.jsx on the App
}

export default App;

// made unneccessary after we added the router in main.jsx
