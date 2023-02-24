import React from "react";
import { useParams, Link, Outlet, Routes, Route } from "react-router-dom";
import Display from "./Display";
const Landing = () => {
  let params = useParams();
  return (
    <div>
      <h4>Welcome&nbsp; {params.name} to UI courses</h4>
      <h4> Just Launched...</h4>
      <Link to="display/Angular">Angular</Link> <br />
      <Link to="display/React">React</Link> <br />
      <Link to="display/Express">Express</Link> <br />
      <Link to="display/Vue">Vue</Link>
      <Routes>
        <Route path="display/:topic" element={<Display />} />
      </Routes>
    </div>
  );
};

export default Landing;
