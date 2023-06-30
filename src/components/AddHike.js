import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function AddHike({ onAddHike }) {
  const [park, setPark] = useState("");
  const [suggestedmi, setSuggestedmi] = useState(null);
  const [difficulty, setDifficulty] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const numSuggestedmi = parseFloat(suggestedmi);
    const formData = {
      park,
      numSuggestedmi,
      difficulty,
      image,
      description,
    };
    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/hikes", configObj)
      .then((res) => res.json())
      .then((data) => onAddHike(data));
    history.push("/");
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <h1>Save A New Hike</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setPark(e.target.value)}
              id="park"
              label="Park Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setSuggestedmi(e.target.value)}
              id="suggestedmi"
              label="Suggested Distance"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">miles</InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={(e) => setDifficulty(e.target.value)}
              id="difficulty"
              label="Difficulty"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              id="image"
              label="Photo URL"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              label="Notes"
              variant="outlined"
              multiline
            />
            <input type="submit" value="Add Hike" />
          </form>
        </Grid>

        <Grid item md={6}>
          <p>A pretty photo will go here</p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddHike;
