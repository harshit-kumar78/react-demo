import React, { useEffect, useState } from "react";

const User = ({ data, count }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <>
      <h1>X:{x}</h1>
      <h1>Y:{y}</h1>
    </>
  );
};

export default User;
