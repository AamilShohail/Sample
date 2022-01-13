import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("aamilshohail")}>
        Greet Parent
      </button>
    </div>
  );
}
