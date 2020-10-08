import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <h4 className="header__logo">PetPage</h4>
        <div className="header__search">
          <input type="text" placeholder="search..." />
        </div>
      </nav>
    </div>
  );
}

export default Header;
