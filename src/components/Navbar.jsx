// import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/">Wiki Countries</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
