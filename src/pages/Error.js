import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/ErrorStyle.sass";
import error from "../assets/images/error.svg";

const Error = () => {
  return (
    <div className="error-page">
      <img src={error} alt="error" className="img error-img" />
      <h2>Ohh! Page Not Found</h2>
      <p>We can't semm to find the page you're looking for</p>
      <Link to="/" className="error-btn">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
