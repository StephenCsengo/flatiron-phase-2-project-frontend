import React from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Card({ hike }) {
  const location = useLocation();

  const hideComplete = location.pathname === "/completed";
  const hideRemove = location.pathname === "/";

  return (
    <Grid item md={4}>
      <img src={hike.image} alt="" />
      <h3>{hike.park}</h3>
      <section>
        <p>
          Suggested Distance: <strong>{hike.suggestedmi} miles</strong>
        </p>
        <p>
          Difficulty: <strong>{hike.difficulty}</strong>
        </p>
      </section>
      <p>Notes: {hike.description}</p>
      {hideComplete ? null : (
        <Button variant="contained">Complete This Hike</Button>
      )}
      {hideRemove ? null : (
        <Button variant="contained">Remove This Hike</Button>
      )}
    </Grid>
  );
}

export default Card;
