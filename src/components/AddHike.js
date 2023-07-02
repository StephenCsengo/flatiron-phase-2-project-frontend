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
    fetch(`${process.env.REACT_APP_API_URL}/hikes`, configObj)
      .then((res) => res.json())
      .then((data) => onAddHike(data));
    history.push("/");
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Save A New Hike</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              className="input"
              onChange={(e) => setPark(e.target.value)}
              id="park"
              label="Park Name"
              variant="filled"
            />
            <TextField
              className="input"
              onChange={(e) => setSuggestedmi(e.target.value)}
              id="suggestedmi"
              label="Planned Distance"
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">miles</InputAdornment>
                ),
              }}
            />
            <TextField
              className="input"
              onChange={(e) => setDifficulty(e.target.value)}
              id="difficulty"
              label="Difficulty"
              variant="filled"
            />
            <TextField
              className="input"
              onChange={(e) => setImage(e.target.value)}
              id="image"
              label="Photo URL"
              variant="filled"
            />
            <TextField
              className="input"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              label="Notes"
              variant="filled"
              multiline
            />
            <input className="btn" type="submit" value="Add Hike" />
          </form>
        </Grid>

        <Grid item md={6}>
          <img
            className="add-img"
            src="/add-pg-photo.jpg"
            alt="Bash Bish Falls"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddHike;
