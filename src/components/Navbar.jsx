import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-circle">XM</span>
        <span className="logo-text">Ximena</span>
      </div>
  <ul>
    <li><NavLink to="/" end>Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/projects">Projects</NavLink></li>
    <li><NavLink to="/skills">Skills</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </ul>
</nav>  
  );
}
