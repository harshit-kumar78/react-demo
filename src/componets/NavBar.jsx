import React from "react";
import {
  NavLink,
  Outlet,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();
  let { name } = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/landing/" + name);
  };
  return (
    <div>
      <h1>navbar</h1>
      <div>
        <NavLink to="home">home</NavLink>
      </div>
      <div>
        <NavLink to="about">about</NavLink>
      </div>
      <div>
        <NavLink to="contact">contact</NavLink>
      </div>
      <Outlet></Outlet>
      <button onClick={handleClick}>click here</button>
    </div>
  );
};

export default NavBar;
