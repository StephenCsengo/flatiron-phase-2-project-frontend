import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/completed">Your Completed Hikes</NavLink>
      <NavLink to="/addhike">Save A New Hike</NavLink>
    </div>
  );
}

export default Navbar;
