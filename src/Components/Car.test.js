import React from "react";
import ReactDOM from "react-dom";
import Car from "./Car";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Car />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Car html", () => {
  const props = {
    name: "Aston Martin",
    imgSrc:
      "http://astonmartindb7vantage.e-monsite.com/medias/images/am001705-db7-ir-race.jpg",
    race: "participe"
  };
  const div = document.createElement("div");
  ReactDOM.render(<Car {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
