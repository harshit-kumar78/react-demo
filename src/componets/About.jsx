import React from "react";
import { Outlet, Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="about-child-one">child one</Link>
      <Link to="about-child-two">child two</Link>
      <Outlet />
    </div>
  );
};

export default About;
