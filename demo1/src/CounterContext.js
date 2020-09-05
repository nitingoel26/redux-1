export const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
const DEFAULT_STATE = {
  counter: 0,
};
export const reducer = (state = DEFAULT_STATE, action) => {
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
export const actions = {
  incValue() {
    return { type: types.INCREMENT };
  },
  decValue() {
    return { type: types.DECREMENT };
  },
};
