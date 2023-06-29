import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function CompleteForm({ hikes }) {
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState("");
  const [hikeSelection, setHikeSelection] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(hikeSelection);
  }
  let selectedHike = hikes.find((hike) => hike.id === hikeSelection);
  console.log(selectedHike);
  return (
    <Container>
      <Grid item md={6}></Grid>
      <Grid item md={6}>
        <form onSubmit={handleSubmit}>
          <select
            id="hike"
            value={hikeSelection}
            onChange={(e) => setHikeSelection(e.target.value)}
          >
            {hikes.map((hike) => (
              <option key={hike.park} value={hike.id}>
                {hike.park}
              </option>
            ))}
          </select>
          <label htmlFor="distance">Miles Hiked</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <label htmlFor="date">Date Hiked</label>
          <input
            type="date"
            id="date"
            min="2023-03-07"
            max="2023-12-03"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input type="submit" value="Complete Hike" />
        </form>
      </Grid>
    </Container>
  );
}

export default CompleteForm;
