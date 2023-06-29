import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
        {hikes.length > 0 ? (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Completed Hike</TableCell>
                  <TableCell align="right">Distance Hiked</TableCell>
                  <TableCell align="right">Date Completed</TableCell>
                  <TableCell align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hikes.map((hike) => (
                  <TableRow
                    key={hike.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={hike.finishedHike.image} alt="" />
                    </TableCell>
                    <TableCell>{hike.finishedHike.park}</TableCell>
                    <TableCell align="right">
                      {hike.distanceHiked} Miles
                    </TableCell>
                    <TableCell align="right">{hike.date}</TableCell>
                    <TableCell align="right">
                      <button>Remove</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>There are no hikes</p>
        )}
      </Grid>
    </Container>
  );
}
export default CompletePage;

/*
{hikes.map((hike) => (
          <Card key={hike.park} hike={hike} />
        ))}
*/
