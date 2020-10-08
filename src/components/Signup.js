import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Register</h1>
        <form>
          <div>
            <input type="text" placeholder="Enter username" />
          </div>
          <div>
            <input type="email" placeholder="Enter email" />
          </div>
          <div>
            <input type="password" placeholder="Enter password" />
          </div>
          <div>
            <input type="password" placeholder="Confirm password" />
          </div>
          <button>Signup</button>
          <a href="/">Already have an account Login ?</a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
