import React from "react";
import { useContext } from "react";

import { ContextApi } from "../App";
import SuperChild from "./SuperChild";
const AppChild = () => {
  const { appColor } = useContext(ContextApi);
  console.log(appColor);
  return (
    <div style={{ color: appColor }}>
      <h1>App-child</h1>
      <SuperChild />
    </div>
  );
};

export default AppChild;
