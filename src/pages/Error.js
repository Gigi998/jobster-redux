import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/error.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={error} alt="error" />
        <h2>Ohh! Page Not Found</h2>
        <p>We can't semm to find the page you're looking for</p>
        <Link to="/" className="error-btn">
          Back to home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
