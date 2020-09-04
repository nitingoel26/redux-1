import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();

const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
const DEFAULT_STATE = {
  counter: 0,
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export function incValue() {
  return { type: types.INCREMENT };
}
export let decValue = () => {
  return { type: types.DECREMENT };
};

function CounterContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <CounterContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
