import React, { useContext } from "react";
import { ContextApi } from "../App";

const SuperChild = () => {
  let data = "red";
  const { appColor, sendData } = useContext(ContextApi);
  return (
    <div style={{ color: appColor }}>
      SuperChild
      <button onClick={() => sendData(data)}>send data </button>
    </div>
  );
};

export default SuperChild;
