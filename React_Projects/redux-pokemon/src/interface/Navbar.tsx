import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styling/navbar.css";
//these aren't actually transparent, need to make them so
// import pokeball from "../assets/pokeball-transparent.png";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="link-container">
          <Link to="/" className="nav-link">
            Interactive Poke App
            {/* <img src={pokeball} /> */}
          </Link>
        </div>
        <div className="link-container">
          <div className="nav-items-container">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
