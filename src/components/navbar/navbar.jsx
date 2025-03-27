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

  window.addEventListener("resize", () => {
    window.innerWidth >= 1024 ? setIsOpen(false) : null;
  });

  return (
    <nav>
      <div className="logo-wrapper">
        <a href="">
          <img src="assets/images/eredivisie-white.png" className="logo" />
        </a>

        <div className="triangle"></div>
      </div>

      <button className="toggle-menu-button" onClick={toggleMenu}>
        <i
          className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} ${
            isAnimating ? (isOpen ? "rotate-right" : "rotate-left") : ""
          }`}
        ></i>
      </button>

      <ul className={`nav-items ${isOpen ? "open" : ""}`}>
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

        <li className="nav-item language-select">NL</li>
      </ul>
    </nav>
  );
};

export default Navbar;
