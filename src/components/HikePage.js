import React, { useState, useEffect } from "react";
import HikeList from "./HikeList";
import HikeDetails from "./HikeDetails";
import Container from "@mui/material/Container";

function HikePage() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/hikes")
      .then((resp) => resp.json())
      .then((data) => setHikes(data));
  }, []);

  return (
    <Container>
      <HikeList hikes={hikes} />
      <HikeDetails hike={hikes[1]} />
    </Container>
  );
}
export default HikePage;
