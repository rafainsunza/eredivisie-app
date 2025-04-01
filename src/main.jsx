import "./styles/main.scss";
import "./styles/reset.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./context/language-context";

import NavbarTop from "./components/navbar-top/navbar-top";
import NavbarBottom from "./components/navbar-bottom/navbar-bottom";
import Standings from "./components/standings/standings";
import Schedule from "./components/schedule/schedule";

function App() {
  return (
    <>
      <header>
        <NavbarTop />
      </header>
      <main>
        <Schedule />
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
