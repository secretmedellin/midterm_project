import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import NotFound from "./components/NotFound";

// import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello React",
      content: "Lorem.",
    },
    {
      id: 2,
      title: "Hello Project",
      content: "Tothe.",
    },
    {
      id: 3,
      title: "Hello Blog",
      content: "Ipsum.",
    },
  ]);
  const [message, setMessage] = useState(null);
  const setFlashMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 1600);
  };
  const addNewPost = (post) => {
    post.id = posts.length + 1;
    post.slug = encodeURIComponent(
      post.title.toLowerCase().split(" ").join("-")
    );
    setPosts([...posts, post]);
  };
  // useEffect(() => {
  //   console.log("useEffect");
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Switch> */}
        <Routes>
          <Route exact path="/" element={<Posts posts={posts} />} />
          <Route
            path="/post/:postSlug"
            element={(props) => {
              const post = posts.find(
                (post) => post.slug === props.match.params.postSlug
              );
              return <Post post={post} />;
            }}
          />
          <Route
            exact
            path="/new"
            element={<PostForm addNewPost={addNewPost} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
};

export default App;
