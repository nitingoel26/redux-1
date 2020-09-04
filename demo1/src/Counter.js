import React, { Component } from "react";
import { CounterContext } from "./CounterContext";
export default class Counter extends Component {
  render() {
    return (
      <CounterContext.Consumer>
        {(context) => {
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
        }}
      </CounterContext.Consumer>
    );
  }
}
