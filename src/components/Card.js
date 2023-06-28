import React from "react";

function Card(hike) {
  console.log(hike.hike);
  return (
    <div>
      <img src="https://placehold.co/300x200.png" alt="" />
      <h3>{hike.hike.park}</h3>
      <section>
        <h4>{hike.hike.distance}</h4>
        <h4>{hike.hike.difficulty}</h4>
      </section>
      <p>
        <em>{hike.hike.trail}</em>
      </p>
      <p>{hike.hike.description}</p>
      <button>Complete This Hike</button>
    </div>
  );
}

export default Card;
