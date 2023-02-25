import React, { useContext } from "react";
import { ContextApi } from "../App";

const SuperChild = () => {
  const { appColor } = useContext(ContextApi);
  return <div style={{ color: appColor }}>SuperChild</div>;
};

export default SuperChild;
