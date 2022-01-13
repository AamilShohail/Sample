import React from "react";
import Person from "./Person";

export default function NameList() {
  const persons = [
    {
      id: 1,
      name: "abc",
      age: 28,
      skill: "javascript",
    },
    {
      id: 2,
      name: "efg",
      age: 56,
      skill: "vuejs",
    },
    {
      id: 3,
      name: "hij",
      age: 34,
      skill: "angular",
    },
    {
      id: 4,
      name: "klm",
      age: 36,
      skill: "react",
    },
  ];
  const personList = persons.map((person, index) => (
    <Person key={index} person={person} />
  ));
  return <div>{personList}</div>;
}
