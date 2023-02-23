import React, { useEffect, useState } from "react";

const User = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("event called");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component will unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <>
      <h1>X:{x}</h1>
      <h1>Y:{y}</h1>
    </>
  );
};

export default User;
