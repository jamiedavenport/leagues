import React from "react";
import { Table } from "../table/types";

interface Props {
  table: Table;
}

const LeagueTable: React.FC<Props> = ({ table }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>Lost</th>
          <th>Goals For</th>
          <th>Goals Against</th>
          <th>Goal Difference</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {table.standings.map(standing => (
          <tr key={standing.team}>
            <td>{standing.team}</td>
            <td>{standing.played}</td>
            <td>{standing.won}</td>
            <td>{standing.drawn}</td>
            <td>{standing.lost}</td>
            <td>{standing.goalsFor}</td>
            <td>{standing.goalsAgainst}</td>
            <td>{standing.goalsFor - standing.goalsAgainst}</td>
            <td>{standing.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeagueTable;
