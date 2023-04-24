import React from "react";
import { Bios, Winners, Calendar } from "./Table.jsx";
import '../src/styles/Nav.css';

function Nav({ onInputChange }) {
  const [showTable, setShowTable] = React.useState(null);

  const handleTableClick = (type) => {
    if (showTable === type) {
      setShowTable(null);
    } else {
      setShowTable(type);
    }
  };

  return (
    <>
      <header>
        <h1 className="title">F1</h1>
        <img
          src="https://logotyp.us/files/f1.svg?ver20230225"
          target="_blank"
          alt="F1 logo"
          className="logo"
        />
      </header>
      <nav>
        <ul>
          <li>
          <button onClick={() => handleTableClick("calendar")}>2023 Calendar</button>
            {showTable === "calendar" && <Calendar />}
          </li>
          <li>
            <button onClick={() => handleTableClick("bios")}>Fastest Lap 2022</button>
            {showTable === "bios" && <Bios />}
          </li>
          <li>
            <button onClick={() => handleTableClick("winners")}>Winners 2022</button>
            {showTable === "winners" && <Winners />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
