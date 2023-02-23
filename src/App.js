import logo from "./logo.svg";
import "./App.css";
import Student from "./componets/Student";
import { useEffect, useState } from "react";
import Body from "./componets/Body";
import User from "./componets/User";
function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  return (
    <div className="App">
      <User data={data} count={count} />
      <button onClick={() => setData(data + 1)}>update data</button>
      <button onClick={() => setCount(count + 1)}>update count</button>
    </div>
  );
}

export default App;
