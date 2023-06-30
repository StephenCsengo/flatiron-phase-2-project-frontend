import React from "react";
import Card from "./Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function HikePage({ hikes, onCompleteHike, onRemoveHike }) {
  return (
    <Container>
      <Grid container>
        <h2>Saved Hikes</h2>
      </Grid>
      <Grid container spacing={2}>
        {hikes.map((hike) => (
          <Card
            onCompleteHike={onCompleteHike}
            onRemoveHike={onRemoveHike}
            key={hike.park}
            hike={hike}
          />
        ))}
      </Grid>
    </Container>
  );
}
export default HikePage;
