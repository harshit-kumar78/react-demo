import logo from "./logo.svg";
import "./App.css";
import Student from "./componets/Student";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import PageNotFound from "./componets/PageNotFound";
import HomeOne from "./componets/HomeOne";
import HomeTwo from "./componets/HomeTwo";
import NavBar from "./componets/NavBar";
function App() {
  const [display, setDisplay] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="home" element={<Home />}>
              <Route path="home-child-one" element={<HomeOne />} />
              <Route path="home-child-two" element={<HomeTwo />} />
            </Route>
            <Route path="about" element={<About />}>
              <Route path="about-child-one" element={<HomeOne />} />
              <Route path="about-child-two" element={<HomeTwo />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
