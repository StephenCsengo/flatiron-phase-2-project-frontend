import React from "react";
import Card from "./Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function HikePage(hikes) {
  return (
    <Container>
      <Grid container>
        <h2>Suggested Hikes</h2>
      </Grid>
      <Grid container spacing={2}>
        {hikes.hikes.map((hike) => (
          <Card key={hike.park} hike={hike} />
        ))}
      </Grid>
    </Container>
  );
}
export default HikePage;
