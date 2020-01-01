import React, { useState } from "react";
import TeamSelection from "./components/TeamSelection";
import FixtureList from "./components/FixtureList";
import { Fixture } from "./fixture/types";
import { generateFixtures } from "./fixture/generate";
import { Table } from "./table/types";

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [teams, setTeams] = useState<string[]>([]);
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [table, setTable] = useState<Table>();

  const handleCreateTeam = (team: string) => {
    setTeams([...teams, team]);
  };

  const handleStart = () => {
    setFixtures(generateFixtures(teams));
    setStarted(true);
  };

  if (!started) {
    return (
      <>
        <h1>Leagues</h1>
        <TeamSelection teams={teams} onCreateTeam={handleCreateTeam} />
        <button onClick={handleStart}>Start</button>
      </>
    );
  }

  const handleFixturesChange = (updatedFixtures: Fixture[]) => {
    setFixtures(updatedFixtures);
  };

  return (
    <>
      <FixtureList fixtures={fixtures} onChange={handleFixturesChange} />
      <b>Live Table</b>
    </>
  );
};

export default App;
