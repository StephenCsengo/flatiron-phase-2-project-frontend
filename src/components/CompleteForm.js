import React, { useState } from "react";

function CompleteForm() {
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.date.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select id="hike"></select>
      <label htmlFor="distance">Miles Hiked</label>
      <input
        type="number"
        id="distance"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <label htmlFor="date">Date Hiked</label>
      <input
        type="date"
        id="date"
        min="2023-03-07"
        max="2023-12-03"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input type="submit" value="Complete Hike" />
    </form>
  );
}

export default CompleteForm;
