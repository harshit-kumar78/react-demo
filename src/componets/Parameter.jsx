import React from "react";
import { useParams } from "react-router-dom";

const Parameter = () => {
  const { name, age } = useParams();

  return (
    <div>
      Parameter - {name} - {age}
    </div>
  );
};

export default Parameter;
