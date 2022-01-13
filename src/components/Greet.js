import React from "react";
const Greet = (props) => {
  return (
    <>
      <p>
        Hello World {props.name} - {props.age}
      </p>
      {props.children}
    </>
  );
};

export default Greet;
