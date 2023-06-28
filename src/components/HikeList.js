import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";

function HikeList({ hikes }) {
  return hikes.map((hike) => <Card key={hike.park} hike={hike} />);
}

export default HikeList;
