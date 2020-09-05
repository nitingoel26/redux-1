import React, { Component } from "react";

import { actions, reducer } from "./CounterContext";
import store from "./store";

export default class Counter extends Component {
  state = {
    counter: store.getState().reducer.counter,
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ counter: store.getState().reducer.counter });
    });
  }

  render() {
    console.log(this.state.counter);
    return (
      <div>
        <label>{this.state.counter}</label>
        <br />
        <button
          className="increment"
          onClick={() => {
            return store.dispatch(actions.incValue());
          }}
        >
          Increment
        </button>
        <button
          className="decrement"
          onClick={() => {
            return store.dispatch(actions.decValue());
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
