import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";

function HikeList({ hikes }) {
  console.log(hikes);
  return (
    <Grid container spacing={2}>
      {hikes.hikes.map((hike) => (
        <Card key={hike.park} hike={hike} />
      ))}
    </Grid>
  );
}

export default HikeList;
