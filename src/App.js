import logo from "./logo.svg";
import "./App.css";
import Student from "./componets/Student";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import PageNotFound from "./componets/PageNotFound";
import HomeOne from "./componets/HomeOne";
import HomeTwo from "./componets/HomeTwo";
import NavBar from "./componets/NavBar";
import Parameter from "./componets/Parameter";
import Display from "./componets/Display";
import Landing from "./componets/Landing";
function App() {
  const [display, setDisplay] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/landing/:name/*" element={<Landing />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
