import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo-img" />
          <span className="logo-text">Living Dreams Finishing Works</span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
