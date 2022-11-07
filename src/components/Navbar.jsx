import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <span>
          <p>adyapan</p>
        </span>
        <div className="nav_links">
          <p>home</p>
          <p>blog</p>
        </div>
        <div className="buttons">
          <a href="/login">
            <button type="submit">log in</button>
          </a>
          <button type="submit" href="">
            sign up
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
