import React from "react";
import ReactDOM from "react-dom";
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

const divRoot = document.querySelector("#app");

//ReactDOM.render(<PrimeraApp saludo="Hola Mundo" />, divRoot);
//ReactDOM.render(<PrimeraApp saludo="Hola, soy Goku" />, divRoot);

ReactDOM.render(<CounterApp />, divRoot);

//hook: usestate + properties
