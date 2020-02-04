import React, { useState } from "react";
import { Fixture } from "./fixture/types";
import { generateFixtures } from "./fixture/generate";
import { Table } from "./table/types";
import { emptyTable } from "./table/empty";
import { calculateTable } from "./table/calculate";
import SelectionScene from "./scenes/SelectionScene";
import ResultsScene from "./scenes/ResultsScene";
import Page from "./components/Page";

const defaultTable: Table = {
  standings: []
};

// const App: React.FC = () => {
//   const [started, setStarted] = useState(false);
//   const [teams, setTeams] = useState<string[]>([]);
//   const [fixtures, setFixtures] = useState<Fixture[]>([]);
//   const [table, setTable] = useState<Table>(defaultTable);

//   const handleCreateTeam = (team: string) => {
//     setTeams([...teams, team]);
//   };

//   const handleStart = () => {
//     setFixtures(generateFixtures(teams));
//     setStarted(true);
//     setTable(emptyTable(teams));
//   };

//   if (!started) {
//     return (
//       <SelectionScene
//         teams={teams}
//         onCreateTeam={handleCreateTeam}
//         onStart={handleStart}
//       />
//     );
//   }

//   const handleFixturesChange = (updatedFixtures: Fixture[]) => {
//     setFixtures(updatedFixtures);
//     setTable(calculateTable(updatedFixtures));
//   };

//   return (
//     <ResultsScene
//       fixtures={fixtures}
//       table={table}
//       onFixturesChange={handleFixturesChange}
//     />
//   );
// };

const App: React.FC = () => <Page>Hello World</Page>;

export default App;
