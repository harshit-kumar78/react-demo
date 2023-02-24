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
import Header from "./componets/Header";
import Protected from "./componets/Protected";
import Dashboard from "./componets/Dashboard";
import Profile from "./componets/Profile";
import Login from "./componets/Login";
import Order from "./componets/Order";
import Blog from "./componets/Blog";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
