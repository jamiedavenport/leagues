import React, { useState } from "react";
import { Fixture } from "./fixture/types";
import { generateFixtures } from "./fixture/generate";
import { Table } from "./table/types";
import { emptyTable } from "./table/empty";
import { calculateTable } from "./table/calculate";
import SelectionScene from "./scenes/SelectionScene";
import ResultsScene from "./scenes/ResultsScene";
import Page from "./components/Page";
import Panels, { Panel } from "./components/Panels";
import Card, { CardBody, CardButton, CardHeader } from "./components/Card";
import Logo from "./components/Logo";

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

const App: React.FC = () => (
  <Page>
    <Panels>
      <Panel>
        <Logo />
      </Panel>
      <Panel>
        <Card>
          <CardHeader>Team Selection</CardHeader>
          <CardBody>Content Here</CardBody>
          <CardButton>START</CardButton>
        </Card>
      </Panel>
    </Panels>
  </Page>
);

export default App;
