import React from "react";
import Grid from "@mui/material/Grid";

function HikeDetails(hike) {
  console.log(hike.hike);
  hike = {
    id: 15,
    park: "Machimoodus State Park",
    trail: "Upper Vista Trail, Purple Trail, and Lower Vista Trail",
    distance: "1.6 miles",
    description:
      "Machimoodus State Park is noteworthy for its 300 acres of uplands, woodlands, meadows, river and cove waterfronts, hiking trails, bird watching and scenic vistas. It takes its name, Machimoodus, from the earliest visitors to the area. As noisy rumblings and echoes were witnessed in turn by the Pequot, Mohegan and Narragansetts, they referred to this location as 'the place of bad noises' or Machimoodus.",
    difficulty: "Moderate",
    photos: [
      "Sign",
      "Photo from the Upper Vista Trail",
      "Photo from the Lower Vista Trail",
    ],
    map: "https://portal.ct.gov/DEEP/State-Parks/Parks/Machimoodus-State-Park/Maps",
    image:
      "https://cdn.branchcms.com/43L054R6mQ-1637/images/trails/trail/Machimoodus_C_H-128.jpeg",
  };
  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <img src={hike.image} alt="" />

        <section>
          <p>
            <a href={hike.map} target="_blank " rel="noopener">
              Trail Map
            </a>
          </p>
          <p>
            <em>{hike.trail}</em>
          </p>
        </section>
      </Grid>
      <Grid item md={6}>
        <h3>{hike.park}</h3>
        <p>
          {hike.distance} {hike.difficulty}
        </p>
        <ul>
          {hike.photos.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <p>{hike.description}</p>
        <button>Complete This Hike</button>
      </Grid>
    </Grid>
  );
}

export default HikeDetails;
