import React, { useState, useEffect } from "react";
import TeamBox from "./TeamBox";
import TeamModal from "./TeamModal";

function F1Teams() {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(
        "https://saucy-turkey-production.up.railway.app/teams"
      );
      const data = await response.json();
      setTeams(data);
    };
    fetchTeams();
  }, []);

  const handleShowModal = (team) => {
    setShowModal(team);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <>
      <div className="teams-container">
        {teams.map((team) => (
          <TeamBox
            key={team._id}
            team={team}
            onClick={handleShowModal}
            onClose={handleCloseModal}
          />
        ))}
      </div>
      {showModal && showModal !== null && (
        <TeamModal team={showModal} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default F1Teams;