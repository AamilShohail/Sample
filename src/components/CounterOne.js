import React, { useReducer } from "react";

export default function CounterOne() {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "increment2":
        return { ...state, secondCounter: state.secondCounter + action.value };
      case "decrement2":
        return { ...state, secondCounter: state.secondCounter - action.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <div>Count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment2-5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement2
      </button>

      <button onClick={() => dispatch({ type: "reset", value: 1 })}>Reset</button>
    </div>
  );
}
