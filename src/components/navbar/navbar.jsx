import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <nav>
      <div className="logo-wrapper">
        <img src="assets/images/eredivisie-white.png" className="logo" />
        <div className="triangle"></div>
      </div>

      <button className="toggle-menu-button" onClick={toggleMenu}>
        <i
          className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} ${
            isAnimating ? (isOpen ? "rotate-right" : "rotate-left") : ""
          }`}
        ></i>
      </button>

      <ul className="nav-items">
        <li className="nav-item">
          <a href="" className="nav-link clubs">
            Clubs
          </a>
        </li>

        <li className="nav-item">
          <a href="" className="nav-link standings">
            Stand
          </a>
        </li>

        <li className="nav-item">
          <a href="" className="nav-link schedule">
            Programma & uitslagen
          </a>
        </li>

        <li className="nav-item">
          <a href="" className="nav-link topscorers">
            Topscorers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
