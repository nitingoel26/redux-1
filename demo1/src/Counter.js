import React, { Component } from "react";
import { CounterContext } from "./CounterContext";
export default class Counter extends Component {
  incValue = this.incValue.bind(this);
  render() {
    let { counter, incValue, decValue } = this.context;

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
}
