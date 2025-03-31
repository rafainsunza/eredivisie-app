import React, { useContext, useEffect, useState } from "react";
import "./banner-bottom.scss";
import { LanguageContext } from "../../context/language-context";

const BannerBottom = () => {
  const { translations } = useContext(LanguageContext);
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [linkTexts, setLinkTexts] = useState({
    standings: "",
    schedule: "",
    clubs: "",
    topscorers: "",
  });

  useEffect(() => {
    // wait for translations before rendering
    if (translations?.banner_bottom) {
      setTitleText(translations?.banner_bottom?.title);
      setDescriptionText(translations?.banner_bottom.description);
      setLinkTexts({
        standings: translations?.banner_bottom.standings,
        schedule: translations?.banner_bottom.schedule,
        clubs: translations?.banner_bottom.clubs,
        topscorers: translations?.banner_bottom.topscorers,
      });
    }
  }, [translations]);

  return (
    <div className="banner-bottom-outer">
      <div className="banner-bottom-wrapper">
        <div className="banner-bottom-triangle"></div>
        <div className="banner-bottom-text">
          <h2 className="banner-bottom-title">{titleText.toUpperCase()}</h2>
          <p className="banner-bottom-description">{descriptionText}</p>
        </div>
        <div className="banner-bottom-links-wrapper">
          <ul className="banner-bottom-links">
            <li className="banner-bottom-item">
              <a href="" className="banner-bottom-link">
                <i className="fa-solid fa-caret-right"></i>
                {linkTexts.standings.toUpperCase()}
              </a>
            </li>
            <li className="banner-bottom-item">
              <a href="" className="banner-bottom-link">
                <i className="fa-solid fa-caret-right"></i>
                {linkTexts.schedule.toUpperCase()}
              </a>
            </li>
            <li className="banner-bottom-item">
              <a href="" className="banner-bottom-link">
                <i className="fa-solid fa-caret-right"></i>
                {linkTexts.clubs.toUpperCase()}
              </a>
            </li>
            <li className="banner-bottom-item">
              <a href="" className="banner-bottom-link">
                <i className="fa-solid fa-caret-right"></i>
                {linkTexts.topscorers.toUpperCase()}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
