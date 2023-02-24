import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>navbar</h1>
      <div>
        <Link to="home">home</Link>
      </div>
      <div>
        <Link to="about">about</Link>
      </div>
      <div>
        <Link to="contact">contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
