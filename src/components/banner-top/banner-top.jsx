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

  useEffect(() => {
    // wait for translations before rendering
    if (translations?.banner_top) {
      setTitleText(translations?.banner_top?.[titleKey]);
    }
  }, [translations, titleKey]);

  return (
    <div className="banner-top-outer">
      <div className="banner-top-wrapper">
        <div className="banner-top-background">
          <h1 className="banner-top-title">
            {titleText.toUpperCase()}

            {hasTitleSpan && <span className="banner-top-title-span"></span>}
          </h1>

          {hasSecondaryTitle && (
            <h2 className="banner-top-secondary-title"></h2>
          )}

          {hasButtons && <div className="banner-top-buttons"></div>}
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
