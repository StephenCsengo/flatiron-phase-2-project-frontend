import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function CompleteForm({ hikes }) {
  const [distanceHiked, setDistanceHiked] = useState("");
  const [date, setDate] = useState("");
  const [hikeSelection, setHikeSelection] = useState(1);
  const [finishedHike, setFinishedHike] = useState(1);
  const history = useHistory();

  useEffect(() => {
    if (hikes.length > 0) {
      setFinishedHike(hikes.find((hike) => hike.id === hikeSelection));
    }
  }, [hikes, hikeSelection]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      finishedHike,
      distanceHiked,
      date,
    };
    fetch("http://localhost:3000/completed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    history.push("/completed");
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>Complete A Hike</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="hike">Select A Hike</label>
            <select
              id="hike"
              value={hikeSelection}
              onChange={(e) => setHikeSelection(Number(e.target.value))}
            >
              {hikes.map((hike) => (
                <option key={hike.park} value={hike.id}>
                  {hike.park}
                </option>
              ))}
            </select>
            <label htmlFor="distanceHiked">Miles Hiked</label>
            <input
              type="number"
              id="distanceHiked"
              value={distanceHiked}
              onChange={(e) => setDistanceHiked(e.target.value)}
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

        <Grid item xs={6}>
          <h3>{finishedHike.park}</h3>
          <img src={finishedHike.image} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CompleteForm;
