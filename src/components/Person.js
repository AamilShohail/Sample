import React from "react";

export default function Person(props) {
  const { person } = props;
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </h2>
    </div>
  );
}
