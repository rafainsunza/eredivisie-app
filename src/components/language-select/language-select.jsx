import React, { useState, useEffect, useCallback } from "react";
import "./language-select.scss";

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "nl"
  );
  const [translation, setTranslation] = useState({});

  const languageItems = Array.from(
    document.querySelectorAll(".language-select-item")
  );
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  const loadLanguageData = useCallback(async (language) => {
    try {
      const data = await import(`../../data/languages/${language}.json`);
      setTranslation(data);
    } catch (error) {
      console.log(`Error loading language file: ${language}: ${error}`);
    }
  });

  useEffect(() => {
    navLinks.forEach((link) => {
      const translationKey = link.classList[1];
      const translatedText = translation.navbar_top[translationKey];

      link.innerText = translatedText;
    });
  }, [translation]);

  useEffect(() => {
    localStorage.setItem("language", language);

    languageItems.forEach((item) =>
      item.classList.contains(language)
        ? item.classList.add("active")
        : item.classList.remove("active")
    );

    loadLanguageData(language);
  }, [language]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    const button = document.querySelector(".language-select-toggle");

    if (
      languageItems.includes(e.target) ||
      e.target.closest(".language-select-toggle") === button
    ) {
      return;
    } else {
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    toggleMenu();
  };

  document.addEventListener("click", (e) => handleOutsideClick(e));

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
