import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Login.css";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, dispatch] = useStateValue();

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    // if (username === "" && password === "") {
    //   alert("please fill all fields");
    // } else if (username === "") {
    //   alert("please fill in the username");
    // } else if (password === "") {
    //   alert("please enter password");
    // } else {
    //   // localStorage.setItem("user", user);
    // }
    dispatch({
      type: "SET_USER",
      user: "username",
    });
    history.push("/");
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <div>
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <button onClick={login}>Login</button>
          <a href="/">forget password</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
