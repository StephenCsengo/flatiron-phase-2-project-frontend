import React from "react";
import Grid from "@mui/material/Grid";

function Card({ hike, onCompleteHike, onRemoveHike }) {
  function handleCompleteClick() {
    onCompleteHike(hike);
  }
  function handleRemoveClick() {
    onRemoveHike(hike);
  }
  return (
    <Grid className="card" item md={4}>
      <img src={hike.image} alt="" />
      <section>
        <h3>{hike.park}</h3>
        <Grid container>
          <Grid className="info" item md={6}>
            <p>Planned Distance</p>
            <p>
              <strong>{hike.suggestedmi} miles</strong>
            </p>
          </Grid>
          <Grid className="info" item md={6}>
            <p>Difficulty</p>
            <p>
              <strong>{hike.difficulty}</strong>
            </p>
          </Grid>
        </Grid>
        <p>Notes: {hike.description}</p>
      </section>
      <Grid container>
        <button className="complete" onClick={handleCompleteClick}>
          Complete Hike
        </button>
        <button className="remove" onClick={handleRemoveClick}>
          Remove Hike
        </button>
      </Grid>
    </Grid>
  );
}

export default Card;
