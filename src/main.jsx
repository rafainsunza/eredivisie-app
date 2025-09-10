import "./styles/main.scss";
import "./styles/reset.css";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./context/language-context";

import NavbarTop from "./components/navbar-top/navbar-top";
import NavbarBottom from "./components/navbar-bottom/navbar-bottom";
import Schedule from "./components/schedule/schedule";
import Standings from "./components/standings/standings";

function App() {
  const [activePage, setActivePage] = useState("schedule");

  return (
    <>
      <header>
        <NavbarTop setActivePage={setActivePage} />
      </header>
      <main>
        {activePage === "schedule" && <Schedule />}
        {activePage === "standings" && <Standings />}
      </main>
      <footer>
        <NavbarBottom />
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
