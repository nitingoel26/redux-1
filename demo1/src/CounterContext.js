import React, { createContext, Component } from "react";

export const CounterContext = createContext();

class CounterContextProvider extends Component {
  state = {
    counter: 0,
    incValue: this.incValue.bind(this),
  };

  incValue() {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1,
    });
  }
  decValue = () => {
    this.setState({
      ...this.state,
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <CounterContext.Provider
        value={{
          ...this.state,

          decValue: this.decValue,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterContextProvider;
