import React from "react";
import Grid from "@mui/material/Grid";

function Card(hike) {
  //console.log(hike.hike);
  function handleDetailClick() {
    console.log(`I got clicked ${hike.hike.id}`);
  }
  return (
    <Grid item md={4}>
      <img src={hike.hike.image} alt="" />
      <h3>{hike.hike.park}</h3>
      <section>
        <h4>{hike.hike.distance}</h4>
        <h4>{hike.hike.difficulty}</h4>
      </section>
      <p>
        <em>{hike.hike.trail}</em>
      </p>
      <p>{hike.hike.description}</p>
      <button onClick={handleDetailClick}>See Details</button>
      <button>Complete This Hike</button>
    </Grid>
  );
}

export default Card;
