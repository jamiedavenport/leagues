import React from "react";
import Tbl, { Row, Col, Header } from "../components/Table";
import { Table } from "../table/types";

interface Props {
  table: Table;
}

const LeagueTable: React.FC<Props> = ({ table }) => {
  return (
    <Tbl>
      <Row>
        <Header>Team</Header>
        <Header>Played</Header>
        <Header>Won</Header>
        <Header>Drawn</Header>
        <Header>Lost</Header>
        <Header>Goals For</Header>
        <Header>Goals Against</Header>
        <Header>Goal Difference</Header>
        <Header>Points</Header>
      </Row>
      {table.standings.map(standing => (
        <Row key={standing.team}>
          <Col>{standing.team}</Col>
          <Col>{standing.played}</Col>
          <Col>{standing.won}</Col>
          <Col>{standing.drawn}</Col>
          <Col>{standing.lost}</Col>
          <Col>{standing.goalsFor}</Col>
          <Col>{standing.goalsAgainst}</Col>
          <Col>{standing.goalsFor - standing.goalsAgainst}</Col>
          <Col>{standing.points}</Col>
        </Row>
      ))}
    </Tbl>
  );
};

export default LeagueTable;
