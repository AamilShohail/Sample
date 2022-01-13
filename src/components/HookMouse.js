import React, { useEffect, useState } from "react";

export default function HookMouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
      console.log("Component Umnounting Code");
    };
  }, []);
  return (
    <div>
      Hooks X - {X} Y -{Y}
    </div>
  );
}
