import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./CounterContext";
const rootReducer = combineReducers({ reducer });

export default createStore(rootReducer);
