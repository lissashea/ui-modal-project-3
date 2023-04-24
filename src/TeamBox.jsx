import React, { useState } from "react";
import TeamModal from "./TeamModal";
import "../src/styles/TeamBox.css";

function TeamBox({ team, onClick, setShowModal, onClose }) {
  const [showModal, setShowModalState] = useState(false);
  
  const handleCloseModal = () => {
    setShowModal(null);
    setShowModalState(false);
    onClose();
  };

  return (
    <>
      <div className="team-box" onClick={() => onClick(team)}>
        <div className="front">
          <img src={team.teamLogo} alt={team.teamName} />
          <h2>{team.teamName}</h2>
        </div>
      </div>
      {showModal && (
        <TeamModal team={team} setShowModal={setShowModal} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
}

export default TeamBox;