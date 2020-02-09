import React from "react";
import { Table } from "../table/types";
import styled from "../styled";
import { css } from "@emotion/core";

interface Props {
  table: Table;
}

const Tbl = styled.table`
  width: 100%;

  /* Remove Cell Spacing */
  border-collapse: collapse;
`;

const Row = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const cellStyles = css`
  padding: 0.5rem;
`;

const Header = styled.th`
  ${cellStyles}

  font-size: 0.9em;
`;

const Cell = styled.td`
  ${cellStyles}
`;

const TeamCell = styled(Cell)`
  font-size: 1.2em;
  font-weight: 900;
`;

const NumCell = styled(Cell)`
  text-align: center;
`;

const PointsCell = styled(NumCell)`
  font-weight: 900;
`;

const LeagueTable: React.FC<Props> = ({ table }) => {
  return (
    <Tbl>
      <thead>
        <tr>
          <Header></Header>
          <Header></Header>
          <Header>PLD</Header>
          <Header>W</Header>
          <Header>D</Header>
          <Header>L</Header>
          <Header>GF</Header>
          <Header>GA</Header>
          <Header>GD</Header>
          <Header>P</Header>
        </tr>
      </thead>
      <tbody>
        {table.standings.map((standing, index) => (
          <Row key={standing.team}>
            <Cell>{index + 1}.</Cell>
            <TeamCell>{standing.team}</TeamCell>
            <NumCell>{standing.played}</NumCell>
            <NumCell>{standing.won}</NumCell>
            <NumCell>{standing.drawn}</NumCell>
            <NumCell>{standing.lost}</NumCell>
            <NumCell>{standing.goalsFor}</NumCell>
            <NumCell>{standing.goalsAgainst}</NumCell>
            <NumCell>{standing.goalDifference}</NumCell>
            <PointsCell>{standing.points}</PointsCell>
          </Row>
        ))}
      </tbody>
    </Tbl>
  );
};

export default LeagueTable;
