import React from "react";
import { useParams } from "react-router-dom";

const Display = () => {
  const { topic } = useParams();
  return (
    <div style={{ border: "solid 30px red" }}>
      <h1>{topic}</h1>
    </div>
  );
};

export default Display;
