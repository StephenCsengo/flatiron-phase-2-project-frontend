import React, { useState, useEffect } from "react";
import HikeList from "./HikeList";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";

function CompletePage() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/completed")
      .then((resp) => resp.json())
      .then((data) => setHikes(data));
  }, []);

  return (
    <Container>
      <HikeList hikes={hikes} />
    </Container>
  );
}
export default CompletePage;
