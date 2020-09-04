import React, { createContext, useState } from "react";

export const CounterContext = createContext();

function CounterContextProvider(props) {
  let [state, setCounter] = useState({
    counter: 0,
  });

  function incValue() {
    setCounter({
      counter: state.counter + 1,
    });
  }
  let decValue = () => {
    setCounter({
      counter: state.counter - 1,
    });
  };

  return (
    <CounterContext.Provider
      value={{
        ...state,
        incValue,
        decValue,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
