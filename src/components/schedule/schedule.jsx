import React, { useContext, useState } from "react";
import "./schedule.scss";
import { LanguageContext } from "../../context/language-context";
import BannerTop from "../banner-top/banner-top";
import BannerBottom from "../banner-bottom/banner-bottom";

const Schedule = () => {
  const { translations } = useContext(LanguageContext);
  const [matchData, setMatchData] = useState([]);

  const updateMatchdata = (newMatchData) => {
    setMatchData(newMatchData);
  };

  const formatTeamName = (name) => {
    const cleanupRules = {
      "AFC Ajax": "Ajax",
      "Feyenoord Rotterdam": "Feyenoord",
      "FC Twente '65": "FC Twente",
      NEC: "N.E.C Nijmegen",
      "Willem II Tilburg": "Willem II",
    };

    return cleanupRules[name] || name;
  };

  return (
    <>
      <BannerTop
        titleKey={"schedule"}
        hasButtons={true}
        hasSecondaryTitle={true}
        hasTitleSpan={true}
        updateMatchData={updateMatchdata}
      />

      <div className="schedule-outer">
        <div className="schedule-wrapper">
          <ul className="schedule-items">
            {matchData.map((match) => {
              const matchId = match.id;
              const matchStatus = match.status;

              const fullDate = new Date(match.utcDate);

              // convert to Netherlands time
              const options = {
                timeZone: "Europe/Amsterdam",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              };
              const formatter = new Intl.DateTimeFormat([], options);

              const time = formatter.format(fullDate);
              const day = fullDate.getUTCDay();
              const date = fullDate.getUTCDate();
              const month = fullDate.getUTCMonth();
              const year = fullDate.getUTCFullYear();

              const homeTeamCrest = match.homeTeam.crest;
              const homeTeamName = formatTeamName(match.homeTeam.name);
              const homeTeamScore = match.score.fullTime.home;
              const awayTeamCrest = match.awayTeam.crest;
              const awayTeamName = formatTeamName(match.awayTeam.name);
              const awayTeamScore = match.score.fullTime.away;
              const result = `${homeTeamScore} - ${awayTeamScore}`;

              // wait for translations before rendering
              if (translations?.schedule) {
                const formattedDate = `${translations?.schedule?.day_names[day]}, ${date} ${translations?.schedule?.month_names[month]} ${year}`;
                const tbd = translations?.schedule?.tbd;

                return (
                  <li className="schedule-item" key={matchId}>
                    <a href="#" className="schedule-link">
                      <div className="schedule-date">
                        <div className="schedule-date-triangle"></div>
                        {formattedDate.toUpperCase()}
                      </div>

                      <div className="schedule-match">
                        <div className="schedule-team">
                          <img src={homeTeamCrest} alt={`${homeTeamName} logo`} className="schedule-team-crest" />
                          <div className="schedule-team-name">{homeTeamName.toUpperCase()}</div>
                        </div>

                        <div className="schedule-time-result">
                          {matchStatus === "TIMED" ? time : matchStatus === "SCHEDULED" ? tbd : result}
                        </div>

                        <div className="schedule-team">
                          <img src={awayTeamCrest} alt={`${awayTeamName} logo`} className="schedule-team-crest" />
                          <div className="schedule-team-name">{awayTeamName.toUpperCase()}</div>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <BannerBottom />
    </>
  );
};

export default Schedule;
