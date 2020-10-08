import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [user, setUser] = useState(null);
  return (
    <div className="header">
      <nav>
        <h4 className="header__logo">PetPage</h4>
        {user ? (
          <div className="header__search">
            <input type="text" placeholder="search..." />
          </div>
        ) : (
          ""
        )}
        {!user ? (
          <div>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </div>
        ) : (
          <a href="/login">Logout</a>
        )}
      </nav>
    </div>
  );
}

export default Header;
