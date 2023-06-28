import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";

function HikeList({ hikes }) {
  return (
    <Grid container spacing={2}>
      {hikes.map((hike) => (
        <Card key={hike.park} hike={hike} />
      ))}
    </Grid>
  );
}

export default HikeList;
