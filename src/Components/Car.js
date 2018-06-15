import React from "react";

const Car = ({ name, imgSrc, race }) => (
  <div>
    <img alt={name} src={imgSrc} />
    <h3>{name}</h3>
    <p>{race}</p>
  </div>
);

export default Car;
