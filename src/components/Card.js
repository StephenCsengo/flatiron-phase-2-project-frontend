import React from "react";
import Grid from "@mui/material/Grid";

function Card(hike) {
  return (
    <Grid item md={4}>
      <img src={hike.hike.image} alt="" />
      <h3>{hike.hike.park}</h3>
      <section>
        <p>
          Suggested Distance: <strong>{hike.hike.suggestedmi} miles</strong>
        </p>
        <p>
          Difficulty: <strong>{hike.hike.difficulty}</strong>
        </p>
      </section>
      <p>Notes: {hike.hike.description}</p>
      <button>Complete This Hike</button>
    </Grid>
  );
}

export default Card;
