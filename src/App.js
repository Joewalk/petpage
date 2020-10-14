import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Post from "./components/Post";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { auth, db } from "./firebase";
import Account from "./components/Account";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        )
      );
    return () => {
      unsub();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        console.log("You are not signed in!");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          {currentUser ? (
            <Route path="/">
              <div className="app__body">
                <SidebarLeft currentUser={currentUser} />
                <div className="app__posts">
                  {posts.map(({ post, id }) => (
                    <Post key={id} id={id} post={post} />
                  ))}
                </div>
                <SidebarRight />
              </div>
            </Route>
          ) : (
            <Login />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
