import React, { useState } from "react";
import FixtureList from "../components/FixtureList";
import { Fixture } from "../fixture/types";
import LeagueTable from "../components/LeagueTable";
import { Table } from "../table/types";
import Panels, { Panel } from "../components/Panels";
import Card, { CardHeader, CardBody } from "../components/Card";
import Logo from "../components/Logo";
import Page from "../components/Page";
import Footer from "../components/Footer";

interface Props {
  fixtures: Fixture[];
  table: Table;
  onFixturesChange: (updated: Fixture[]) => void;
}

const ResultsScene: React.FC<Props> = ({
  fixtures,
  table,
  onFixturesChange
}) => {
  const [gameDay, setGameDay] = useState(0);

  return (
    <Page>
      <Panels>
        <Panel>
          <Logo />
          <FixtureList
            gameDay={gameDay}
            fixtures={fixtures}
            onChange={onFixturesChange}
            nextGame={() => setGameDay(gameDay + 1)}
          />
          <Footer />
        </Panel>
        <Panel>
          <Card>
            <CardHeader>Team Selection</CardHeader>
            <CardBody>
              <LeagueTable table={table} />
            </CardBody>
          </Card>
        </Panel>
      </Panels>
    </Page>
  );
};

export default ResultsScene;
