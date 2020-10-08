import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" placeholder="Enter username" />
          </div>
          <div>
            <input type="password" placeholder="Enter password" />
          </div>
          <button>Login</button>
          <a href="/">forget password</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
