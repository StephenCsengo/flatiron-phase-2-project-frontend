import React from "react";
import HikeList from "./HikeList";
import Container from "@mui/material/Container";

function HikePage(hikes) {
  return (
    <Container>
      <HikeList hikes={hikes} />
    </Container>
  );
}
export default HikePage;
