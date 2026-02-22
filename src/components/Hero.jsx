import React from "react";
import constructionImg from "../assets/construction-team.png";

export default function Hero() {
  return (
    <section className="hero-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>Building Your Vision, One Brick at a Time</h1>
        <p>From design to completion, we deliver projects that last.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get a Free Quote
          </a>
          <a href="#projects" className="btn btn-secondary">
            View Our Projects
          </a>
        </div>
      </div>
    </section>
  );
}
