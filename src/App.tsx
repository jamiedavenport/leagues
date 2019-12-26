import React, { useState, useEffect } from "react";
import TeamSelection from "./components/TeamSelection";

const App: React.FC = () => {
  const [teams, setTeams] = useState<string[]>([]);

  const handleCreateTeam = (team: string) => {
    setTeams([...teams, team]);
  };

  return (
    <>
      <h1>Leagues</h1>
      <TeamSelection teams={teams} onCreateTeam={handleCreateTeam} />
    </>
  );
};

export default App;
