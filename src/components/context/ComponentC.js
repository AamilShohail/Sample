import React, { useContext } from "react";
import { CountContext } from "../../App";


export default function ComponentC() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component C - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}