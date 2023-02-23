import logo from "./logo.svg";
import "./App.css";
import Student from "./componets/Student";
import { useState } from "react";
import Body from "./componets/Body";

function App() {
  const [a, setA] = useState("gigo");
  function sendData(data) {
    setA(data);
  }
  return (
    <div className="App">
      {/* <p>{a}</p> */}

      <Body>
        <Student f={sendData}></Student>
        <Student f={sendData}></Student>
      </Body>
    </div>
  );
}

export default App;
