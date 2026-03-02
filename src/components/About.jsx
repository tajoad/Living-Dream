import React from "react";
import constructionImg from "../assets/construction-team.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>About Our Company</h2>
          <p>
            <strong>Leading Interior Finishing Firm:</strong> We specialize in
            premium interior finishing, transforming spaces into elegant and
            functional environments where quality meets excellence. With expert
            craftsmanship, high-quality materials, and attention to detail, we
            deliver flawless finishes for residential and commercial projects.
          </p>
          <p>
            At the heart of our work is a commitment to precision, durability,
            and client satisfaction — turning every space into a masterpiece.
          </p>
          <ul className="about-highlights">
            <li>✔ Innovative Project Solutions</li>
            <li>✔ On-Time & On-Budget Delivery</li>
            <li>✔ Safety & Quality Compliance</li>
          </ul>
        </div>
        <div className="about-image">
          <img
            src={constructionImg}
            alt="Construction Team"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}
