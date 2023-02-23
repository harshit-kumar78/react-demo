import logo from "./logo.svg";
import "./App.css";
import Student from "./componets/Student";
import { useEffect, useState } from "react";
import Body from "./componets/Body";
import User from "./componets/User";
import FetchData from "./componets/FetchData";
import Employees from "./componets/Employees";
function App() {
  const [display, setDisplay] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setDisplay(!display)}>toogle</button>
      {display && <User />} */}

      <Employees></Employees>
    </div>
  );
}

export default App;
