import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Header.css";

function Header() {
  const [user, dispatch] = useStateValue();
  const history = useHistory();

  const login = (e) => {
    history.push("/login");
  };
  const signup = (e) => {
    history.push("/signup");
  };

  const logout = () => {
    dispatch({
      type: "SET_LOGOUT",
      user: null,
    });
  };
  return (
    <div className="header">
      <nav>
        <h4 className="header__logo">PetPage</h4>

        {user?.user ? (
          <div className="header__search">
            <input type="text" placeholder="search..." />
          </div>
        ) : (
          <div>
            <button onClick={login}>Login</button>
            <button onClick={signup}>Signup</button>
          </div>
        )}
        {user?.user && <button onClick={logout}>Logout</button>}
      </nav>
    </div>
  );
}

export default Header;
