import React, { useContext, useEffect, useState } from "react";
import "./navbar-bottom.scss";
import { LanguageContext } from "../../context/language-context";
import { getFootballData } from "../../services/fetch-data";

const NavbarBottom = () => {
  const { translations } = useContext(LanguageContext);
  const [labelText, setLabelText] = useState("");
  const [copyrightText, setCopyrightText] = useState("");
  const [teamData, setTeamData] = useState(null);

  const teamWebsites = {
    Ajax: "https://ajax.nl/",
    PSV: "https://www.psv.nl/",
    Utrecht: "https://www.fcutrecht.nl/",
    Feyenoord: "https://www.feyenoord.com/",
    Twente: "https://www.fctwente.nl/",
    AZ: "https://www.az.nl/",
    "Go Ahead": "https://www.ga-eagles.nl/",
    Groningen: "https://www.fcgroningen.nl/",
    Sittard: "https://www.fortunasittard.nl/",
    Heerenveen: "https://www.sc-heerenveen.nl/",
    NAC: "https://www.nac.nl/",
    NEC: "https://www.nec-nijmegen.nl/",
    Heracles: "https://www.heracles.nl/",
    Zwolle: "https://peczwolle.nl/",
    Sparta: "https://www.sparta-rotterdam.nl/",
    Telstar: "https://sctelstar.nl/",
    Excelsior: "https://excelsiorrotterdam.nl/",
    Volendam: "https://fcvolendam.nl/",
  };

  useEffect(() => {
    // wait for translations before rendering
    if (translations?.navbar_bottom) {
      setLabelText(translations?.navbar_bottom?.label_text);
      setCopyrightText(translations?.navbar_bottom?.copyright_text);
    }
  }, [translations]);

  useEffect(() => {
    const getTeamsData = async () => {
      try {
        const teamsData = (await getFootballData()).teams;
        setTeamData(teamsData.map((team) => team));
      } catch (error) {
        console.log("Failed to fetch crests:", error);
      }
    };

    getTeamsData();
  }, []);

  // Sort teams alphabetically
  const sortedTeamData = teamData?.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <>
      <div className="navbar-bottom-outer">
        <div className="navbar-bottom-wrapper">
          <span className="navbar-bottom-label">{labelText}</span>
          <div className="navbar-bottom-links">
            {sortedTeamData && sortedTeamData.length > 0
              ? sortedTeamData.map((team) => {
                  const website = teamWebsites[team.shortName];

                  return (
                    <a
                      href={website}
                      key={team.id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="navbar-bottom-link"
                    >
                      <img className="navbar-bottom-link-image" src={team.crest} alt={"Logo for " + team.shortName} />
                    </a>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <div className="copyright-outer">
        <div className="copyright-wrapper">
          <div className="copyright-text-wrapper">
            <div className="copyright-text">
              <span className="copyright-symbol">&copy;</span>
              {new Date().getFullYear()} The DevTender
              <span className="symbol-trademark">&trade;</span>
            </div>
            <div className="copyright-text-secondary">{copyrightText}</div>
          </div>

          <img className="copyright-logo" src="assets/images/eredivisie-white.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default NavbarBottom;
