import React, { useState, useEffect } from "react";
import TeamSelection from "./components/TeamSelection";

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [teams, setTeams] = useState<string[]>([]);

  const handleCreateTeam = (team: string) => {
    setTeams([...teams, team]);
  };

  const handleStart = () => setStarted(true);

  if (!started) {
    return (
      <>
        <h1>Leagues</h1>
        <TeamSelection teams={teams} onCreateTeam={handleCreateTeam} />
        <button onClick={handleStart}>Start</button>
      </>
    );
  }

  return (
    <>
      <b>Fixture List</b>
      <b>Live Table</b>
    </>
  );
};

export default App;
