import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>navbar</h1>
      <div>
        <NavLink to="home/5">home</NavLink>
      </div>
      <div>
        <NavLink to="about">about</NavLink>
      </div>
      <div>
        <NavLink to="contact">contact</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default NavBar;
