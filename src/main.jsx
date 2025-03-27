import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import "./styles/reset.css";
import NavbarTop from "./components/navbar-top/navbar-top";

function App() {
  return (
    <header>
      <NavbarTop />
    </header>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
