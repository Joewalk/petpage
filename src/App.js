import React from "react";
import "./App.css";
import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Post from "./components/Post";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { useStateValue } from "./StateProvider";

function App() {
  const [user, dispatch] = useStateValue();

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

          {user?.user ? (
            <Route path="/">
              <div className="app__body">
                <SidebarLeft />
                <div className="app__posts">
                  <Post user={user} />
                  <Post user={user} />
                  <Post user={user} />
                  <Post user={user} />
                  <Post user={user} />
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
