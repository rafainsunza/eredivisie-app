import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/language-context";
import LanguageSelect from "../language-select/language-select";
import "./navbar-top.scss";

const NavbarTop = ({ setActivePage }) => {
  const { translations } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const key = link.classList[1];
      link.innerText = translations.navbar_top?.[key];
    });
  }, [translations]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOutsideNavClick = (e) => {
    const toggleButton = document.querySelector(".toggle-menu-button");
    const navbar = document.querySelector(".nav-items");
    if (navbar && !navbar.contains(e.target) && toggleButton && !toggleButton.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideNavClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideNavClick);
    };
  }, [isOpen]);

  return (
    <div className="nav-wrapper">
      <nav className="nav-header">
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
            <a href="#" className="nav-link standings" onClick={() => setActivePage("standings")}></a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link schedule" onClick={() => setActivePage("schedule")}></a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link clubs"></a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link topscorers"></a>
          </li>

          <li className="nav-item">
            <LanguageSelect />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarTop;
