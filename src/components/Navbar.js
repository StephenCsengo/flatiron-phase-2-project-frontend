import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";

function Navbar() {
  return (
    <div>
      <Grid className="navbar" container>
        <Grid item>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/completed">Your Completed Hikes</NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/addhike">Save A New Hike</NavLink>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
