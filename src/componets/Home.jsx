import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <Link to="home-child-one">child one</Link>
      <Link to="home-child-two">child two</Link>
      <Outlet />
    </div>
  );
};

export default Home;
