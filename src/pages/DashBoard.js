import React from "react";
import { Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <div>
      <h3>Dashboard page</h3>
      <Link to="/register" className="btn btn-hero">
        Login/register
      </Link>
    </div>
  );
};

export default DashBoard;
