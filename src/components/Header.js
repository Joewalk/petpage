import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { auth } from "../firebase";

function Header() {
  const history = useHistory();
  const currentUser = auth.currentUser;

  const login = (e) => {
    history.push("/login");
  };
  const signup = (e) => {
    history.push("/signup");
  };

  const logout = () => {
    auth
      .signOut()
      .then(function () {
        console.log("Sign out complete");
      })
      .catch(function (error) {
        console.log("An error occured when signing out");
      });
    history.push("/login");
  };

  return (
    <div className="header">
      <nav>
        <h4 className="header__logo">PetPage</h4>

        {currentUser ? (
          <div className="header__search">
            <input type="text" placeholder="search..." />
          </div>
        ) : (
          <div>
            <button onClick={login}>Login</button>
            <button onClick={signup}>Signup</button>
          </div>
        )}
        {currentUser && <button onClick={logout}>Logout</button>}
      </nav>
    </div>
  );
}

export default Header;
