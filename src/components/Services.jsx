import React from "react";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Residential Construction</h3>
            <p>We build safe and modern residential homes.</p>
          </div>
          <div className="card">
            <h3>Commercial Projects</h3>
            <p>Office buildings, retail complexes, and warehouses.</p>
          </div>
          <div className="card">
            <h3>Infrastructure Development</h3>
            <p>Urban development projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
