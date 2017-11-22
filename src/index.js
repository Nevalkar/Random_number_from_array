import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getNumber() {
  let randomNumber = Math.floor(Math.random() * numeros.length);
  return numeros[randomNumber];
}

const App = () => (
  <div>
    <h1>{getNumber()}</h1>
  </div>
);

render(<App />, document.getElementById("root"));
