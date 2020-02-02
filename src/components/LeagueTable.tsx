import React from "react";
import Tbl, { Row, Col, Header } from "../components/Table";
import { Table } from "../table/types";

interface Props {
  table: Table;
}

const LeagueTable: React.FC<Props> = ({ table }) => {
  return (
    <Tbl>
      <Header>
        <Col>Team</Col>
        <Col>Played</Col>
        <Col>Won</Col>
        <Col>Drawn</Col>
        <Col>Lost</Col>
        <Col>Goals For</Col>
        <Col>Goals Against</Col>
        <Col>Goal Difference</Col>
        <Col>Points</Col>
      </Header>
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
