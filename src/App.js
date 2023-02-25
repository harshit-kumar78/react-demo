import "./App.css";
import react, { useState } from "react";
import { createContext } from "react";
import AppChild from "./componets/AppChild";

export const ContextApi = createContext();

function App() {
  const data = "green";
  const [a, setA] = useState("green");
  const sendData = (value) => {
    // a = value;
    setA(value);
  };
  return (
    <div>
      <ContextApi.Provider value={{ appColor: data, sendData: sendData }}>
        <h1 style={{ color: a }}>app comp</h1>
        <AppChild></AppChild>
      </ContextApi.Provider>
    </div>
  );
}

export default App;
