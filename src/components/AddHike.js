import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function AddHike() {
  const [distanceHiked, setDistanceHiked] = useState("");
  const [date, setDate] = useState("");
  const [hikeSelection, setHikeSelection] = useState(1);
  const [finishedHike, setFinishedHike] = useState(1);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      finishedHike,
      distanceHiked,
      date,
    };
    console.log(formData);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>Save A New Hike</h1>
          <form onSubmit={handleSubmit}>
            <TextField id="park" label="Park Name" variant="outlined" />
            <TextField
              id="suggestedmi"
              label="Suggested Distance"
              variant="outlined"
            />
            <TextField id="difficulty" label="Difficulty" variant="outlined" />
            <TextField id="image" label="Photo URL" variant="outlined" />
            <TextField
              id="description"
              label="Notes"
              variant="outlined"
              multiline
            />
            <Button variant="contained">Add Hike</Button>
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

export default AddHike;
