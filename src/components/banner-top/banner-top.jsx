import React, { useContext, useEffect, useState } from "react";
import "./banner-top.scss";
import { LanguageContext } from "../../context/language-context";
import { getFootballData } from "../../services/fetch-data";

const BannerTop = ({
  titleKey,
  hasButtons,
  hasTitleSpan,
  hasSecondaryTitle,
  updateMatchday,
}) => {
  const { translations } = useContext(LanguageContext);
  const [titleText, setTitleText] = useState("");
  const [buttonText, setButtonText] = useState({
    previous: "",
    next: "",
  });
  const [secondaryTitleText, setSecondaryTitleText] = useState("");
  const [matchday, setMatchday] = useState(null);
  const [maxMatchday, setMaxMatchday] = useState(0);
  const [matchdayData, setMatchdayData] = useState({
    dates: [],
  });

  useEffect(() => {
    const getMaxMatchday = async () => {
      try {
        const maxMatchdayNumber = (await getFootballData()).maxMatchdays;
        setMaxMatchday(maxMatchdayNumber);
      } catch (error) {
        console.log("Failed to get number of max matchdays", error);
      }
    };

    getMaxMatchday();
  }, []);

  useEffect(() => {
    const getCurrentMatchday = async () => {
      try {
        const currentMatchday = (await getFootballData()).currentMatchday;
        setMatchday(currentMatchday);
        updateMatchday(currentMatchday);
      } catch (error) {
        console.log("Failed to get current matchday:", error);
      }
    };

    getCurrentMatchday();
  }, []);

  useEffect(() => {
    const getMatchdayData = async () => {
      if (!matchday) return;

      try {
        const returnedMatchdayData = await getFootballData(matchday);
        const matchDates = returnedMatchdayData.matches.map(
          (match) => match.utcDate
        );

        setMatchdayData({ dates: matchDates });
      } catch (error) {
        console.log("Failed to get matchday data:", error);
      }
    };

    getMatchdayData();
  }, [matchday]);

  useEffect(() => {
    const sortedDates = matchdayData.dates.sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const earliestDate = new Date(sortedDates[0]);
    const latestDate = new Date(sortedDates[sortedDates.length - 1]);

    const earliestDay = earliestDate.getUTCDate();
    const latestDay = latestDate.getUTCDate();

    const earliestMonth = earliestDate.getUTCMonth();
    const latestMonth = latestDate.getUTCMonth();

    const earliestYear = earliestDate.getUTCFullYear();
    const latestYear = latestDate.getUTCFullYear();

    // wait for translations before rendering
    if (translations?.banner_top) {
      let formattedSecondaryTitle = "";

      if (earliestMonth === latestMonth && earliestYear === latestYear) {
        // DAY-DAY-MONTH-YEAR
        formattedSecondaryTitle = `${earliestDay} ${translations?.banner_top?.until} ${latestDay} ${translations?.banner_top?.month_names[earliestMonth]} ${earliestYear}`;
      } else if (earliestYear !== latestYear) {
        // DAY-MONTH-YEAR DAY-MONTH-YEAR
        formattedSecondaryTitle = `${earliestDay} ${translations?.banner_top?.month_names[earliestMonth]} ${earliestYear} ${translations?.banner_top?.until} ${latestDay} ${translations?.banner_top?.month_names[latestMonth]} ${latestYear}`;
      } else {
        // DAY-MONTH DAY-MONTH-YEAR
        formattedSecondaryTitle = `${earliestDay} ${translations?.banner_top?.month_names[earliestMonth]} ${translations?.banner_top?.until} ${latestDay} ${translations?.banner_top?.month_names[latestMonth]} ${earliestYear}`;
      }

      setSecondaryTitleText(formattedSecondaryTitle);
    }
  }, [matchdayData, translations]);

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

  const goToPreviousMatchday = () => {
    if (matchday > 1) {
      const newMatchday = matchday - 1;
      setMatchday(newMatchday);
      updateMatchday(newMatchday);
    }
  };

  const goToNextMatchday = () => {
    if (matchday < maxMatchday) {
      const newMatchday = matchday + 1;
      setMatchday(newMatchday);
      updateMatchday(newMatchday);
    }
  };

  return (
    <div className="banner-top-outer">
      <div className="banner-top-wrapper">
        <div className="banner-top-titles">
          <h1 className="banner-top-title">
            {titleText.toUpperCase()}&nbsp;
            {hasTitleSpan && (
              <span className="banner-top-title-span"> {matchday}</span>
            )}
          </h1>

          {hasSecondaryTitle && (
            <h2 className="banner-top-secondary-title">
              {secondaryTitleText.toUpperCase()}
            </h2>
          )}
        </div>

        {hasButtons && (
          <div className="banner-top-buttons">
            <button
              className="banner-top-buttons-previous"
              onClick={goToPreviousMatchday}
            >
              <i className="fa-solid fa-caret-left"></i>{" "}
              {buttonText.previous.toUpperCase()}
            </button>
            <button
              className="banner-top-buttons-next"
              onClick={goToNextMatchday}
            >
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
