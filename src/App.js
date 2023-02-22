import logo from "./logo.svg";
import "./App.css";
import Header from "./componets/Header";
import Paragraph from "./componets/Paragraph";
import Footer from "./componets/Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("anil");

  const a = (a, b) => console.log(a + b);
  return (
    <div className="App">
      <h1>props in react </h1>
      <Header
        name={name}
        email="header1@abc.com"
        address={{ city: "deoghar", state: "jharkhand" }}
        a={a}
        set={setName}
      ></Header>

      {/* <Header
        name={"header2"}
        email="header1@abc.com"
        address={{ city: "deoghar", state: "jharkhand" }}
      ></Header>
      <Header
        name={"header3"}
        email="header1@abc.com"
        address={{ city: "deoghar", state: "jharkhand" }}
      ></Header> */}
    </div>
  );
}

export default App;
