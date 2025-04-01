import React, { useContext, useEffect, useState } from "react";
import "./schedule.scss";
import { LanguageContext } from "../../context/language-context";
import BannerTop from "../banner-top/banner-top";
import BannerBottom from "../banner-bottom/banner-bottom";

const Schedule = () => {
  const { translations } = useContext(LanguageContext);
  const [titleText, setTitleText] = useState("");

  useEffect(() => {
    // wait for translations before rendering
    if (translations?.banner_bottom) {
      setTitleText(translations?.banner_bottom?.title);
    }
  }, [translations]);

  return (
    <>
      <BannerTop
        titleKey={"schedule"}
        hasButtons={true}
        hasSecondaryTitle={true}
        hasTitleSpan={true}
      />

      <div className="schedule-outer">
        <div className="schedule-wrapper">
          <ul className="schedule-items">
            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>

            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>

            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>
            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>
            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>
            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>

            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>

            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>

            <li className="schedule-item">
              <a href="" className="schedule-link">
                <div className="schedule-date">
                  <div className="schedule-date-triangle"></div>
                  VR 26 DECEMBER 2025
                </div>
                <div className="schedule-match">
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">AJAX</div>
                  </div>
                  <div className="schedule-time-result">4 - 0</div>
                  <div className="schedule-team">
                    <img
                      className="schedule-team-crest"
                      src="assets/images/eredivisie.svg"
                      alt=""
                    />
                    <div className="schedule-team-name">FEYENOORD</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <BannerBottom />
    </>
  );
};

export default Schedule;
