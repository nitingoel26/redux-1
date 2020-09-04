import React from "react";

import CounterContextProvider from "./CounterContext";
import Counter from "./Counter";
function App() {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
}

export default App;
