//para crear un functional component hay un snippet llamado
// rafcp

import React, { useState } from "react";
import PropTypes from "prop-types";

//el useState regresa un arreglo

//Functional Components
const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value); //retorna un arreglo con 2 valores

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1); //tomo el valor anterior del counter y le asigno c+1
  };

  //handleRemove
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  //handleReset
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleReset}> reset </button>
      <button onClick={handleSubtract}> -1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

