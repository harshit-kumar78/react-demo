import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);

  const addBtn = () => {
    console.log("add btn called");
    dispatch({
      type: "increment",
    });
  };
  const subBtn = () => {
    console.log("add btn called");
    dispatch({
      type: "decrement",
    });
  };
  const incBtnByValue = () => {
    dispatch({
      type: "incrementByValue",
      payload: 30,
    });
  };
  return (
    <div>
      <h3>{c}</h3>
      <button onClick={addBtn}>increment</button>
      <button onClick={subBtn}>decrement</button>
      <button onClick={incBtnByValue}>inc by VALUE</button>
    </div>
  );
};

export default Home;
