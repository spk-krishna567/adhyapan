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
        <div className=""></div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
