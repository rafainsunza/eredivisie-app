import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-wrapper">
        <img src="assets/images/eredivisie-white.png" className="logo" />
        <div className="triangle"></div>
      </div>

      <button className="toggle-menu-button">
        <i class="fa-solid fa-bars"></i>
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
