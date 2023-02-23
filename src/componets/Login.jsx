import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Employees from "./Employees";
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

  const sendData = (e) => {
    e.preventDefault();
    axios
      .post(" http://localhost:4000/credentials", {
        email: "hk4@gmail.com",
        password: 8987647638,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const delData = () => {
    axios
      .delete(" http://localhost:4000/credentials/7003")
      .then((res) => axios.get("http://localhost:4000/credentials"))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .catch((err) => console.log(err));
  };
  const updateData = (e) => {
    let data = {
      name: "zxyput",
      email: "gfgfgfg",
    };
    axios
      .put("http://localhost:4000/credentials/7009", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>

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
      <button onClick={sendData}>send data</button>
      <button onClick={delData}>del data</button>
      <button onClick={updateData}>update data</button>
    </div>
  );
};

export default Login;
