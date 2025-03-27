import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/language-context";
import "./language-select.scss";

const LanguageSelect = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    const button = document.querySelector(".language-select-toggle");
    const languageItems = Array.from(
      document.querySelectorAll(".language-select-item")
    );

    if (
      languageItems.includes(e.target) ||
      e.target.closest(".language-select-toggle") === button
    ) {
      return;
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    toggleMenu();
  };

  return (
    <div className="language-select-wrapper">
      <div className="language-select-flag-container">
        <img
          className="language-select-flag"
          src={`assets/images/${language}-flag.png`}
          alt=""
        />
      </div>

      <button className="language-select-toggle" onClick={toggleMenu}>
        {language.toUpperCase()} <i className="fa-solid fa-caret-down"></i>
      </button>
      <ul className={`language-select-menu ${isOpen ? "open" : ""}`}>
        <li
          className="language-select-item nl"
          onClick={() => handleLanguageChange("nl")}
        >
          NL
        </li>
        <li
          className="language-select-item en"
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelect;
