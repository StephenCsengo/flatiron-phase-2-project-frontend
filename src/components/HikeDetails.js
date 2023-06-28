import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

function HikeDetails(hike) {
  //console.log(hike);

  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <img src={hike.image} alt="" />

        <section>
          <p>
            <a href={hike.map} target="_blank " rel="noopener">
              Trail Map
            </a>
          </p>
          <p>
            <em>{hike.trail}</em>
          </p>
        </section>
      </Grid>
      <Grid item md={6}>
        <h1>{hike.park}</h1>
        <p>
          {hike.distance} {hike.difficulty}
        </p>
        <h3>Required Photos</h3>

        <p>{hike.description}</p>
        <button>Complete This Hike</button>
      </Grid>
    </Grid>
  );
}

export default HikeDetails;
