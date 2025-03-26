import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import "./styles/reset.css";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <header>
      <Navbar />
    </header>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
