import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Create from "./components/Create";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#c58cff" }}>
        Money-Tracker App{" "}
      </h1>
      <div className="maindata">
        <Create></Create>
      </div>
    </>
  );
}

export default App;
