import React from "react";

function PopulateDriver({ driver }) {
  return (
    <div className="populatedriver-container">
      <div className="populatedriver-image-container">
        <img
          src={driver.image}
          alt={driver.name}
          className="populatedriver-image"
        />
      </div>
      <div className="populatedriver-info-container">
        <h3>{driver.name}</h3>
        <p>Nationality: {driver.nationality}</p>
        <p>Podiums: {driver.podiums}</p>
        <p>Wins: {driver.wins}</p>
        <p>Official Number: {driver.officialNumber}</p>
        {/* <p>2022 Total Points: {calculatePoints(driver.pointsByYear, 2022)}</p>
        <p>2023 Total Points: {calculatePoints(driver.pointsByYear, 2023)}</p> */}
      </div>
    </div>
  );
}

export default PopulateDriver;

