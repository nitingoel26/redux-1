import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { incValue, decValue } from "./CounterContext";
export default function Counter() {
  const context = useContext(CounterContext);

  let { counter, dispatch } = context;
  console.log(context);
  return (
    <div>
      <label>{counter}</label>
      <br />
      <button
        className="increment"
        onClick={() => {
          dispatch(incValue());
        }}
      >
        Increment
      </button>
      <button
        className="decrement"
        onClick={() => {
          dispatch(decValue());
        }}
      >
        Decrement
      </button>
    </div>
  );
}
