import React, { useState, useEffect } from "react";
import "./styles/TeamModal.css";
import teamObj from "./utils/carImages";
import carsColors from "./utils/carsColors.json";

function TeamModal({ team, drivers, onClose }) {
  const [teamDrivers, setTeamDrivers] = useState([]);
  const [teamImage, setTeamImage] = useState("");

  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await fetch(
        "https://saucy-turkey-production.up.railway.app/drivers"
      );
      const data = await response.json();
      const teamDrivers = data.filter(
        (driver) => driver.team.teamName === team.teamName
      );
      setTeamDrivers(teamDrivers);
      setTeamImage(
        teamObj.find((teamObj) => teamObj.carName === team.teamName)
          .imageAddress
      );
    };
    fetchDrivers();
  }, [team]);

  const handleClose = () => {
    onClose();
  };

  const getColor = (teamName, isDriver) => {
    const team = carsColors["2023"].find((team) => team.teamName === teamName);
    if (team) {
      return isDriver ? team.color2 : team.color1;
    } else {
      return "transparent";
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{team && team.teamName}</h4>
          <button onClick={handleClose}>X</button>
        </div>
        <div className="modal-body">
          <img
            className="team-image"
            src={teamImage}
            alt={team && team.teamName}
          />
          <ul>
            <li>
              <div
                style={{
                  borderBottom: `5px solid ${getColor(team.teamName)}`,
                  padding: "5px",
                  marginRight: "10px",
                }}
              >
                <h4 className="team-info-title">Country:</h4>
                <p>{team.country}</p>
              </div>
              <div
                style={{
                  borderBottom: `5px solid ${getColor(team.teamName)}`,
                  padding: "5px",
                  marginRight: "10px",
                }}
              >
                <h4 className="team-info-title">Principal:</h4>
                <p>{team.principal}</p>
              </div>
              <div
                style={{
                  borderBottom: `5px solid ${getColor(team.teamName)}`,
                  padding: "5px",
                  marginRight: "10px",
                }}
              >
                <h4 className="team-info-title">Championship:</h4>
                <p>{team.championships}</p>
              </div>
              <div
                style={{
                  borderBottom: `5px solid ${getColor(team.teamName)}`,
                  padding: "5px",
                  marginRight: "10px",
                }}
              >
                <h4 className="team-info-title">Points 2023:</h4>
                <p>{team.teamPointsByYear[1].points}</p>
              </div>
              <div
                style={{
                  borderBottom: `5px solid ${getColor(team.teamName)}`,
                  padding: "5px",
                  marginRight: "10px",
                }}
              >
                <h4 className="team-info-title">Points 2022:</h4>
                <p>{team.teamPointsByYear[0].points}</p>
              </div>
            </li>
          </ul>
          <ul className="driver-list">
            {teamDrivers.map((driver) => (
              <li key={driver.id} className="driver-item">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="driver-image"
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                />
                <div
                  style={{
                    borderBottom: `5px solid ${getColor(team.teamName, true)}`,
                    padding: "5px",
                    marginRight: "10px",
                  }}
                >
                  <h4 className="driver-info-title">Name:</h4>
                  <p className="driver-info">{driver.name}</p>
                </div>
                <div
                  style={{
                    borderBottom: `5px solid ${getColor(team.teamName, true)}`,
                    padding: "5px",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  <h4 className="driver-info-title">Nationality:</h4>
                  <p className="driver-info">{driver.nationality}</p>
                </div>
                <div
                  style={{
                    borderBottom: `5px solid ${getColor(team.teamName, true)}`,
                    padding: "5px",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  <h4 className="driver-info-title">Official Number:</h4>
                  <p className="driver-info">{driver.officialNumber}</p>
                </div>
                <div
                  style={{
                    borderBottom: `5px solid ${getColor(team.teamName, true)}`,
                    padding: "5px",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  <h4 className="driver-info-title">Podiums:</h4>
                  <p className="driver-info">{driver.podiums}</p>
                </div>
                <div
                  style={{
                    borderBottom: `5px solid ${getColor(team.teamName, true)}`,
                    padding: "5px",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  <h4 className="driver-info-title">Wins:</h4>
                  <p className="driver-info">{driver.wins}</p>
                </div>
                {driver.pointsByYear
                  .filter((year) => year.year === 2023)
                  .map((year) => (
                    <div
                      style={{
                        borderBottom: `5px solid ${getColor(
                          team.teamName,
                          true
                        )}`,
                        padding: "5px",
                        marginRight: "10px",
                      }}
                    >
                      <h4 className="driver-info-title">Points 2023:</h4>
                      <p className="driver-info">{year.points}</p>
                    </div>
                  ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamModal;
