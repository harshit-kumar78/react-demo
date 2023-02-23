import React, { useEffect } from "react";

const User = ({ data, count }) => {
  useEffect(() => {
    console.log("useEffect called");
  }, [data]);
  return (
    <>
      <h1>data props :{data}</h1>
      <h1>count props :{count}</h1>
    </>
  );
};

export default User;
