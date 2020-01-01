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
      points: 1
    }
  ]
};

export const withStandings = () => <LeagueTable table={table} />;
