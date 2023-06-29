import React from "react";

function CompleteForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.distance.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <select id="hike"></select>
      <label htmlFor="distance">Miles Hiked</label>
      <input type="number" id="distance" />
      <label htmlFor="date">Date Hiked</label>
      <input type="date" id="date" min="2023-03-07" max="2023-12-03" />
      <input type="submit" value="Complete Hike" />
    </form>
  );
}

export default CompleteForm;
