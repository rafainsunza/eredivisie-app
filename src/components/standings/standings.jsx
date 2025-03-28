import React, { useContext, useEffect, useState } from "react";
import "./standings.scss";
import { LanguageContext } from "../../context/language-context";
import { getStandings } from "../../services/fetch-data";
import BannerTop from "../banner-top/banner-top";

const Standings = () => {
  const { translations } = useContext(LanguageContext);
  const [standings, setStandings] = useState(null);

  //   useEffect(() => {
  //     const fetchStandings = async () => {
  //       try {
  //         const data = await getStandings();
  //         setStandings(data);
  //       } catch (error) {
  //         console.log("Failed to fetch standings:", error);
  //       }
  //     };

  //     fetchStandings();
  //   }, []);

  //   useEffect(() => {
  //     if (translations?.banner_top) {
  //       setTitleText(translations?.banner_top?.[titleKey]);
  //     }
  //   }, [translations, titleKey]);

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
          <table className="standings-table">
            <thead>
              <tr>
                <th>#</th>
                <th>CLUB</th>
                <th>Gs</th>
                <th>W | V | G</th>
                <th>DV-DT</th>
                <th>Ds</th>
                <th>P</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Ajax</td>
                <td>26</td>
                <td>20 | 2 | 4</td>
                <td>55-20</td>
                <td>+35</td>
                <td>64</td>
              </tr>

              <tr>
                <td>2</td>
                <td>PSV</td>
                <td>26</td>
                <td>18 | 4 | 4</td>
                <td>78-30</td>
                <td>+48</td>
                <td>58</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Standings;
