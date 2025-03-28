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
  const [titlePosition, setTitlePosition] = useState(0);

  // match title position to the navbar logo
  const updateTitlePosition = () => {
    const headerLogo = document.querySelector(".logo");

    if (headerLogo) {
      const rect = headerLogo.getBoundingClientRect();
      setTitlePosition(rect.left - 25);
    }
  };

  useEffect(() => {
    const updateTitlePositionOnRender = () => {
      requestAnimationFrame(updateTitlePosition);
    };

    updateTitlePositionOnRender();
    window.addEventListener("resize", updateTitlePositionOnRender);

    return () => {
      window.removeEventListener("resize", updateTitlePositionOnRender);
    };
  }, []);

  useEffect(() => {
    // wait for translations to be before rendering the title
    if (translations?.banner_top) {
      setTitleText(translations?.banner_top?.[titleKey]);
    }
  }, [translations, titleKey]);

  return (
    <div className="banner-top-outer">
      <div className="banner-top-wrapper">
        <div className="banner-top-background">
          <h1
            className="banner-top-title"
            style={{ marginLeft: titlePosition }}
          >
            {titleText.toUpperCase()}

            {hasTitleSpan && <span className="banner-top-title-span"></span>}
          </h1>

          {hasSecondaryTitle && (
            <h2 className="banner-top-secondary-title"></h2>
          )}

          {hasButtons && (
            <div className="banner-top-buttons">
              {/* button structure here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
