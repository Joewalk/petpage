import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Post from "./components/Post";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("null");

  return (
    <div className="app">
      <Header />
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
    </div>
  );
}

export default App;
