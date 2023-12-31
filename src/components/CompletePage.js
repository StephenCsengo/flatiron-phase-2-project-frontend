import React from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";

function CompletePage({ completedHikes }) {
  return (
    <Container className="completed">
      <Grid container spacing={2}>
        <Grid item>
          <h2>Your Completed Hikes</h2>
        </Grid>
      </Grid>
      <Grid container>
        {completedHikes.length > 0 ? (
          <Grid item>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Park</TableCell>
                    <TableCell align="right">Distance Hiked</TableCell>
                    <TableCell align="right">Notes</TableCell>
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ) : (
          <Grid item>
            <p>Oops! There are no completed hikes yet!</p>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
export default CompletePage;
