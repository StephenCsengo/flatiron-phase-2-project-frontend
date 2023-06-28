import React from "react";

function Card() {
  return (
    <div>
      <img src="https://placehold.co/300x200.png" />
      <h3>Park Title</h3>
      <section>
        <h4>Distance</h4>
        <h4>Difficulty</h4>
      </section>
      <p>
        <em>Trail Names</em>
      </p>
      <p>Description</p>
      <button>Complete This Hike</button>
    </div>
  );
}

export default Card;
