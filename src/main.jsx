import "./styles/main.scss";
import "./styles/reset.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./context/language-context";

import NavbarTop from "./components/navbar-top/navbar-top";
import Standings from "./components/standings/standings";

function App() {
  return (
    <>
      <header>
        <NavbarTop />
      </header>
      <main>
        <Standings />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
