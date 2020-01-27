import React, { useState } from "react";
import TeamSelection from "./components/TeamSelection";
import FixtureList from "./components/FixtureList";
import { Fixture } from "./fixture/types";
import { generateFixtures } from "./fixture/generate";
import { Table } from "./table/types";
import LeagueTable from "./components/LeagueTable";
import { emptyTable } from "./table/empty";
import { calculateTable } from "./table/calculate";
import Logo from "./components/Logo";
import Button from "./components/Button";

const defaultTable: Table = {
  standings: []
};

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [teams, setTeams] = useState<string[]>([]);
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [table, setTable] = useState<Table>(defaultTable);

  const handleCreateTeam = (team: string) => {
    setTeams([...teams, team]);
  };

  const handleStart = () => {
    setFixtures(generateFixtures(teams));
    setStarted(true);
    setTable(emptyTable(teams));
  };

  if (!started) {
    return (
      <>
        <Logo />
        <h1>Leagues</h1>
        <TeamSelection teams={teams} onCreateTeam={handleCreateTeam} />
        <Button onClick={handleStart}>Start</Button>
      </>
    );
  }

  const handleFixturesChange = (updatedFixtures: Fixture[]) => {
    setFixtures(updatedFixtures);
    setTable(calculateTable(updatedFixtures));
  };

  return (
    <>
      <FixtureList fixtures={fixtures} onChange={handleFixturesChange} />
      <b>Live Table</b>
      <LeagueTable table={table} />
    </>
  );
};

export default App;
