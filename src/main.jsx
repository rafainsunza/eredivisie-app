import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import "./styles/reset.css";
import { LanguageProvider } from "./context/language-context";
import NavbarTop from "./components/navbar-top/navbar-top";
import BannerTop from "./components/banner-top/banner-top";

function App() {
  return (
    <>
      <header>
        <NavbarTop />
      </header>
      <main>
        <BannerTop
          titleKey={"standings"}
          hasButtons={false}
          hasSecondaryTitle={false}
          hasTitleSpan={false}
        />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
