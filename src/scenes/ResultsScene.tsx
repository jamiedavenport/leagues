import React from "react";
import FixtureList from "../components/FixtureList";
import { Fixture } from "../fixture/types";
import LeagueTable from "../components/LeagueTable";
import { Table } from "../table/types";
import Panels, { Panel } from "../components/Panels";
import Card, { CardHeader, CardBody } from "../components/Card";
import Logo from "../components/Logo";
import Page from "../components/Page";

interface Props {
  fixtures: Fixture[];
  table: Table;
  onFixturesChange: (updated: Fixture[]) => void;
}

const ResultsScene: React.FC<Props> = ({
  fixtures,
  table,
  onFixturesChange
}) => (
  <Page>
    <Panels>
      <Panel>
        <Logo />
        <FixtureList fixtures={fixtures} onChange={onFixturesChange} />
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

export default ResultsScene;
