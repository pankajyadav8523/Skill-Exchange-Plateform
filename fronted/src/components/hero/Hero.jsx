import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1>Welcome to Skill Bridge!</h1>
        <p className='hero-text'>Discover, Learn, and Connect – Bridging Gaps, Exchanging Skills.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
