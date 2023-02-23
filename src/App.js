import logo from "./logo.svg";
import "./App.css";
import Student from "./componets/Student";
import { useEffect, useState } from "react";
import Body from "./componets/Body";

function App() {
  const [data, setData] = useState(10);
  useEffect(() => {
    console.log("useEffect called 2");
  }, [data]);
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}>update data</button>
    </div>
  );
}

export default App;
