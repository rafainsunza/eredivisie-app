import React, { createContext, useState, useEffect } from "react";
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "nl"
  );
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const data = await import(`../data/languages/${language}.json`);
        setTranslations(data);
      } catch (error) {
        console.error(`Error loading translation file for ${language}:`, error);
      }
    };

    loadTranslations();
  }, [language]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
