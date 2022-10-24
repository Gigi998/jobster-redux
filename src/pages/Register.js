import React from "react";
import logo from "../assets/images/logo.svg";
import "../assets/styles/Register.sass";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register">
        <div className="register-heading">
          <img src={logo} alt="logo" />
          <h2>Register</h2>
        </div>
        <form>
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" name="name" id="name" className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-input"
            />
          </div>
        </form>
        <div className="btn-container">
          <button className="btn hero-btn">Submit</button>
          <button className="btn">Demo App</button>
        </div>
        <div className="register-footer">
          <p>Already a member</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
