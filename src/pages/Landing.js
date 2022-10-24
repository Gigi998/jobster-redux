import React from "react";
import main from "../assets/images/main.svg";
import "../assets/styles/LandingStyle.sass";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <main>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job<span> Tracking </span>App
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, reiciendis? Id, saepe totam obcaecati tenetur maiores
            officia laboriosam est mollitia neque sunt minima iure repellendus
            temporibus placeat dolorem fugit unde.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
