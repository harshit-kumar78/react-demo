import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.username == "" || data.password == "") {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          {data.username} - {data.password}
          <input
            style={{ width: "40%" }}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            style={{ width: "40%" }}
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {status == true && <p className="text-success">Login Successfull</p>}
      {status == false && (
        <p className="text-danger">enter username and password</p>
      )}
    </div>
  );
};

export default Login;
