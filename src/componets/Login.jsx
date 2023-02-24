import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const click = () => {
    localStorage.setItem("login", true);
  };
  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/home");
    }
  });
  return (
    <form>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <button onClick={click}>Login</button>
    </form>
  );
};

export default Login;
