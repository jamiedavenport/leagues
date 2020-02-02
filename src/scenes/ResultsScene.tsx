import React from "react";
import FixtureList from "../components/FixtureList";
import { Fixture } from "../fixture/types";
import LeagueTable from "../components/LeagueTable";
import { Table } from "../table/types";
import styled from "../styled";

const Page = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ResultsContainer = styled.div`
  flex: 1;
`;

const TableContainer = styled.div`
  flex: 1;
`;

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
    <ResultsContainer>
      <FixtureList fixtures={fixtures} onChange={onFixturesChange} />
    </ResultsContainer>
    <TableContainer>
      <LeagueTable table={table} />
    </TableContainer>
  </Page>
);

export default ResultsScene;
