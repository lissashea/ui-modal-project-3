import React, { useState } from "react";
import TeamModal from "./TeamModal";
import "../src/styles/TeamBox.css";

function TeamBox({ team, onClick }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    onClick(team);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="team-box" onClick={handleClick}>
        <div className="front">
          <img src={team.teamLogo} alt={team.teamName} />
          <h2>{team.teamName}</h2>
        </div>
      </div>
      {showModal && (
        <TeamModal team={team} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default TeamBox;
