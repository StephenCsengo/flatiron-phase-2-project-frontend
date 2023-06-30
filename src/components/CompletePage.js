import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CompletePage({ completedHikes }) {
  return (
    <Container>
      <Grid container spacing={2}>
        <h2>Your Completed Hikes</h2>
        {completedHikes.length > 0 ? (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Completed Hike</TableCell>
                  <TableCell align="right">Distance Hiked</TableCell>
                  <TableCell align="right">Notes</TableCell>
                  <TableCell align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {completedHikes.map((hike) => (
                  <TableRow
                    key={hike.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={hike.image} alt="" />
                    </TableCell>
                    <TableCell>{hike.park}</TableCell>
                    <TableCell align="right">
                      {hike.suggestedmi} Miles
                    </TableCell>
                    <TableCell align="right">{hike.description}</TableCell>
                    <TableCell align="right">
                      <button>Remove</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Grid container>
            <p>Oops! There are no completed hikes yet!</p>
          </Grid>
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
