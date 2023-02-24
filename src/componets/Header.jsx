import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(localStorage.getItem("login"));
  });
  return (
    <div>
      <nav>
        <Link to="home">Home</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to="login">Login</Link>
        <Link to="profile">Profile</Link>
        <Link to="order">My Orders</Link>
        <Link to="blogs">Blogs</Link>
      </nav>
    </div>
  );
};

export default Header;
