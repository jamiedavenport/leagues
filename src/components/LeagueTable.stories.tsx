import React from "react";
import LeagueTable from "./LeagueTable";
import { Table } from "../table/types";

export default {
  title: "LeagueTable"
};

const table: Table = {
  standings: [
    {
      team: "Doncaster",
      played: 3,
      won: 2,
      drawn: 1,
      lost: 0,
      goalsFor: 10,
      goalsAgainst: 3,
      goalDifference: 7,
      points: 7
    },
    {
      team: "Leeds",
      played: 3,
      won: 0,
      drawn: 1,
      lost: 2,
      goalsFor: 3,
      goalsAgainst: 10,
      goalDifference: -7,
      points: 1
    },
    {
      team: "Manchester",
      played: 3,
      won: 0,
      drawn: 0,
      lost: 3,
      goalsFor: 3,
      goalsAgainst: 15,
      goalDifference: -12,
      points: 0
    }
  ]
};

export const withStandings = () => <LeagueTable table={table} />;
