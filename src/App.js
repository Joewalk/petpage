import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Post from "./components/Post";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            {user ? (
              <div className="app__body">
                <SidebarLeft />
                <div className="app__posts">
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                </div>
                <SidebarRight />
              </div>
            ) : (
              <Login />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
