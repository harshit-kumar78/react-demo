import logo from "./logo.svg";
import "./App.css";
import Student from "./componets/Student";
import { useState } from "react";

function App() {
  const [a, setA] = useState("gigo");
  function sendData(data) {
    setA(data);
  }
  return (
    <div className="App">
      <p>{a}</p>
      <Student f={sendData}></Student>
    </div>
  );
}

export default App;
