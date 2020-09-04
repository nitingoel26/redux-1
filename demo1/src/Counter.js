import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
export default function Counter() {
  const context = useContext(CounterContext);

  let { counter, incValue, decValue } = context;
  console.log(context);
  return (
    <div>
      <label>{counter}</label>
      <br />
      <button className="increment" onClick={incValue}>
        Increment
      </button>
      <button className="decrement" onClick={decValue}>
        Decrement
      </button>
    </div>
  );
}
