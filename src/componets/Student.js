import { useEffect } from "react";

const Student = ({ f }) => {
  let a = "hashit";
  return (
    <>
      <h1>student component</h1>
      <button onClick={() => f("harshit")}>change data </button>
    </>
  );
};

export default Student;
