import React from "react";
import Grid from "@mui/material/Grid";

function Card({ hike, onCompleteHike }) {
  function handleCompleteClick() {
    onCompleteHike(hike);
  }
  return (
    <Grid className="card" item md={4}>
      <img src={hike.image} alt="" />
      <h3>{hike.park}</h3>
      <section>
        <p>
          Planned Distance: <strong>{hike.suggestedmi} miles</strong>
        </p>
        <p>
          Difficulty: <strong>{hike.difficulty}</strong>
        </p>
      </section>
      <p>Notes: {hike.description}</p>
      <button onClick={handleCompleteClick}>Complete This Hike</button>
    </Grid>
  );
}

export default Card;
