import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Car from "./Components/Car";
import ListCars from "./Components/ListCars";

const props = {
  data: [
    {
      name: "Aston Martin",
      race: "Participe au Mans 2018",
      image:
        "http://www.automobile-magazine.fr/asset/cms/964x603/117633/config/85295/en-parallele-de-la-version-routiere-aston-martin-a-devoile-sa-nouvelle-vantage-gte-dendurance.jpg"
    },
    {
      name: "B.M.W",
      race: "Participe au Mans 2018",
      image:
        "https://photos1.tf1.fr/660/370/bmw-24-heures-mans-1999-422ad5-2@1x.jpg"
    },
    {
      name: "Mazda",
      race: "Participe au Mans 2018",
      image: "http://www.autoalgerie.com/IMG/jpg/Mazda-787B-Le-Mans-2011-th.jpg"
    },
    {
      name: "Peugeot",
      race: "Participe au Mans 2018",
      image:
        "https://images.caradisiac.com/logos/5/9/8/3/195983/S0-peugeot-pourrait-revenir-aux-24-heures-du-mans-et-en-endurance-113328.jpg"
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListCars {...props} />
        <Car
          name="Mercedes"
          race="participe"
          imgSrc="https://img00.deviantart.net/959e/i/2015/208/b/4/mercedes_lmr1_front_by_karayaone-d930z8y.jpg"
        />
      </div>
    );
  }
}

export default App;
