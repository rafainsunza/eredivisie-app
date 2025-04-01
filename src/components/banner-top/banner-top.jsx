import React, { useContext, useEffect, useState } from "react";
import "./banner-top.scss";
import { LanguageContext } from "../../context/language-context";

const BannerTop = ({
  titleKey,
  hasButtons,
  hasTitleSpan,
  hasSecondaryTitle,
}) => {
  const { translations } = useContext(LanguageContext);
  const [titleText, setTitleText] = useState("");
  const [buttonText, setButtonText] = useState({
    previous: "",
    next: "",
  });

  useEffect(() => {
    // wait for translations before rendering
    if (translations?.banner_top) {
      setTitleText(translations?.banner_top?.[titleKey]);
    }

    if (hasButtons && translations?.banner_top) {
      setButtonText({
        previous: translations?.banner_top?.previous,
        next: translations?.banner_top?.next,
      });
    }
  }, [translations, titleKey]);

  return (
    <div className="banner-top-outer">
      <div className="banner-top-wrapper">
        <div className="banner-top-titles">
          <h1 className="banner-top-title">
            {titleText.toUpperCase()}&nbsp;
            {hasTitleSpan && <span className="banner-top-title-span"> 25</span>}
          </h1>

          {hasSecondaryTitle && (
            <h2 className="banner-top-secondary-title">
              20 DECEMBER T/M 28 DECEMBER 2025
            </h2>
          )}
        </div>

        {hasButtons && (
          <div className="banner-top-buttons">
            <button className="banner-top-buttons-previous">
              <i className="fa-solid fa-caret-left"></i>{" "}
              {buttonText.previous.toUpperCase()}
            </button>
            <button className="banner-top-buttons-next">
              {buttonText.next.toUpperCase()}
              <i className="fa-solid fa-caret-right"></i>{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerTop;
