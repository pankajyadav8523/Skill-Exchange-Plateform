import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1>Welcome to Skill Bridge!</h1>
        <p className="hero-text">
          Discover, Learn, and Connect – Bridging Gaps, Exchanging Skills.
        </p>
        <div className="hero-buttons">
          <Link to="/login">
            <button className="btn-primary">Get Started</button>
          </Link>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
