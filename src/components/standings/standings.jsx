import React, { useContext, useEffect, useState } from "react";
import "./standings.scss";
import { LanguageContext } from "../../context/language-context";
import { getFootballData } from "../../services/fetch-data";
import BannerTop from "../banner-top/banner-top";
import BannerBottom from "../banner-bottom/banner-bottom";

const Standings = () => {
  const { translations } = useContext(LanguageContext);
  const [standings, setStandings] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [texts, setTexts] = useState({
    winlose_ratio: "",
    scored_conceded: "",
    goal_difference: "",
    title: "",
    champions_league: "",
    champions_league_qualifying: "",
    europa_league: "",
    conference_league: "",
    relegation_playoffs: "",
    relegation: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const data = await getFootballData();
        setStandings(data.standings[0]?.table);
      } catch (error) {
        console.log("Failed to fetch standings:", error);
      }
    };

    fetchStandings();
  }, []);

  useEffect(() => {
    // wait for translations before rendering
    if (translations?.standings) {
      setTexts({
        winlose_ratio: translations?.standings?.winlose_ratio,
        scored_conceded: translations?.standings?.scored_conceded,
        goal_difference: translations?.standings?.goal_difference,
        title: translations?.standings?.legend?.title,
        champions_league: translations?.standings?.legend?.champions_league,
        champions_league_qualifying:
          translations?.standings?.legend?.champions_league_qualifying,
        europa_league: translations?.standings?.legend?.europa_league,
        conference_league: translations?.standings?.legend?.conference_league,
        relegation_playoffs:
          translations?.standings?.legend?.relegation_playoffs,
        relegation: translations?.standings?.legend?.relegation,
      });
    }
  }, [translations]);

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
        titleKey={"standings"}
        hasButtons={false}
        hasSecondaryTitle={false}
        hasTitleSpan={false}
      />

      <div className="standings-page-wrapper">
        <div className="standings-table-wrapper">
          {windowWidth >= 1130 ? (
            <>
              <table className="standings-table left">
                <thead>
                  <tr>
                    <th className="rank">#</th>
                    <th className="club">CLUB</th>
                    <th>GS</th>
                    <th className="winlose-ratio">{texts.winlose_ratio}</th>
                    <th className="scored-conceded">{texts.scored_conceded}</th>
                    <th>{texts.goal_difference}</th>
                    <th className="points">P</th>
                  </tr>
                </thead>

                <tbody>
                  {standings && standings.length > 0
                    ? standings.slice(0, 9).map((team) => {
                        return (
                          <tr
                            key={team.team.id}
                            className={"rank" + team.position}
                          >
                            <td className={`rank rank${team.position}`}>
                              {team.position}
                            </td>
                            <td className="club">
                              <a className="table-club-link" href="">
                                <img
                                  className="table-club-crest"
                                  src={team.team.crest}
                                  alt=""
                                />
                                {formatTeamName(team.team.name)}
                              </a>
                            </td>
                            <td>{team.playedGames}</td>
                            <td className="winlose-ratio">
                              {team.won} | {team.lost} | {team.draw}
                            </td>
                            <td className="scored-conceded">
                              {team.goalsAgainst}-{team.goalsFor}
                            </td>
                            <td>{team.goalDifference}</td>
                            <td className="points">{team.points}</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>

              <table className="standings-table right">
                <thead>
                  <tr>
                    <th className="rank">#</th>
                    <th className="club">CLUB</th>
                    <th>GS</th>
                    <th className="winlose-ratio">{texts.winlose_ratio}</th>
                    <th className="scored-conceded">{texts.scored_conceded}</th>
                    <th>{texts.goal_difference}</th>
                    <th className="points">P</th>
                  </tr>
                </thead>

                <tbody>
                  {standings && standings.length > 0
                    ? standings.slice(9, 18).map((team) => {
                        return (
                          <tr
                            key={team.team.id}
                            className={"rank" + team.position}
                          >
                            <td className={`rank rank${team.position}`}>
                              {team.position}
                            </td>
                            <td className="club">
                              <a className="table-club-link" href="">
                                <img
                                  className="table-club-crest"
                                  src={team.team.crest}
                                  alt=""
                                />
                                {formatTeamName(team.team.name)}
                              </a>
                            </td>
                            <td>{team.playedGames}</td>
                            <td className="winlose-ratio">
                              {team.won} | {team.lost} | {team.draw}
                            </td>
                            <td className="scored-conceded">
                              {team.goalsAgainst}-{team.goalsFor}
                            </td>
                            <td>{team.goalDifference}</td>
                            <td className="points">{team.points}</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </>
          ) : (
            <table className="standings-table">
              <thead>
                <tr>
                  <th className="rank">#</th>
                  <th className="club">CLUB</th>
                  <th>GS</th>
                  <th className="winlose-ratio">{texts.winlose_ratio}</th>
                  <th className="scored-conceded">{texts.scored_conceded}</th>
                  <th>{texts.goal_difference}</th>
                  <th className="points">P</th>
                </tr>
              </thead>

              <tbody>
                {standings && standings.length > 0
                  ? standings.map((team) => {
                      return (
                        <tr
                          key={team.team.id}
                          className={"rank" + team.position}
                        >
                          <td className={`rank rank${team.position}`}>
                            {team.position}
                          </td>
                          <td className="club">
                            <a className="table-club-link" href="">
                              <img
                                className="table-club-crest"
                                src={team.team.crest}
                                alt=""
                              />
                              {formatTeamName(team.team.name)}
                            </a>
                          </td>
                          <td>{team.playedGames}</td>
                          <td className="winlose-ratio">
                            {team.won} | {team.lost} | {team.draw}
                          </td>
                          <td className="scored-conceded">
                            {team.goalsAgainst}-{team.goalsFor}
                          </td>
                          <td>{team.goalDifference}</td>
                          <td className="points">{team.points}</td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          )}
        </div>

        <div className="standings-legend-wrapper">
          <h2 className="standings-legend-title">{texts.title}</h2>
          <ul className="standings-legend">
            <li className="standings-legend-item">
              <div className="standings-legend-color blue"></div>
              {texts.champions_league}
            </li>
            <li className="standings-legend-item">
              <div className="standings-legend-color dark-blue"></div>
              {texts.champions_league_qualifying}
            </li>
            <li className="standings-legend-item">
              <div className="standings-legend-color orange"></div>
              {texts.europa_league}
            </li>
            <li className="standings-legend-item">
              <div className="standings-legend-color green"></div>
              {texts.conference_league}
            </li>
            <li className="standings-legend-item">
              <div className="standings-legend-color light-red"></div>
              {texts.relegation_playoffs}
            </li>
            <li className="standings-legend-item">
              <div className="standings-legend-color red"></div>
              {texts.relegation}
            </li>
          </ul>
        </div>
      </div>

      <BannerBottom />
    </>
  );
};

export default Standings;
