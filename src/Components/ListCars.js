import React from "react";
import { ListGroup } from "reactstrap";
import Car from "./Car";

const ListCars = ({ data }) => (
  <ListGroup>
    {data.map((Car, index) => <Car key={index} {...Car} />)}
  </ListGroup>
);

export default ListCars;
