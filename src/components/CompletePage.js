import React, { useState, useEffect } from "react";
import Card from "./Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function CompletePage() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/completed")
      .then((resp) => resp.json())
      .then((data) => setHikes(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {hikes.map((hike) => (
          <Card key={hike.park} hike={hike} />
        ))}
      </Grid>
    </Container>
  );
}
export default CompletePage;
