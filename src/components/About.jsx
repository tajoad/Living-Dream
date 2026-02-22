import React from "react";
import constructionImg from "../assets/construction-team.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>About Our Company</h2>
          <p>
            <strong>Leading Construction & Engineering Firm:</strong> We deliver
            large-scale infrastructure, residential, and commercial projects
            with precision and integrity.
          </p>
          <p>
            With years of expertise and a skilled workforce, we transform
            architectural visions into <strong>lasting structures</strong>.
          </p>
          <ul className="about-highlights">
            <li>✔ Innovative Project Solutions</li>
            <li>✔ On-Time & On-Budget Delivery</li>
            <li>✔ Safety & Quality Compliance</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={constructionImg} alt="Construction Team" className="about-img" />
        </div>
      </div>
    </section>
  );
}