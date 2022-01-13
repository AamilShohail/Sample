import React from "react";

export default function Hero({ heroName }) {
  if (heroName === "joker") {
    throw new Error(`${heroName} is not a hero`);
  }
  return <div>{heroName} is your hero</div>;
}
