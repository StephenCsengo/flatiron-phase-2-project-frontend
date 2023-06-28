import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/completed">Your Completed Hikes</NavLink>
      <NavLink to="/completeform">Complete A Hike</NavLink>
    </div>
  );
}

export default Navbar;
