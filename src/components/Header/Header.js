import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <header>
      <div className="wrapper container">
        <div className="header">
          <div className="header--title">Social Media Dashboard</div>
          <div className="header--total">Total Followers: 23,004</div>
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;
