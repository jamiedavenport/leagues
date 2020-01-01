import { calculateTable } from "../calculate";
import { Fixture } from "../../fixture/types";
import { Table } from "../types";

test("calculate table", () => {
  const fixtures: Fixture[] = [
    {
      homeTeam: "Doncaster",
      homeScore: 2,

      awayTeam: "Leeds",
      awayScore: 1
    },
    {
      homeTeam: "Manchester",
      homeScore: 3,

      awayTeam: "Leeds",
      awayScore: 0
    },
    {
      homeTeam: "Leeds",
      homeScore: 2,

      awayTeam: "Doncaster",
      awayScore: 2
    },
    {
      homeTeam: "Doncaster",
      homeScore: 1,

      awayTeam: "Manchester",
      awayScore: 1
    },
    {
      homeTeam: "Manchester",
      awayTeam: "Doncaster"
    },
    {
      homeTeam: "Leeds",
      awayTeam: "Manchester"
    }
  ];

  const expectedTable: Table = {
    standings: [
      {
        team: "Doncaster",
        played: 3,
        won: 1,
        drawn: 2,
        lost: 0,
        goalsFor: 5,
        goalsAgainst: 4,
        points: 5
      },
      {
        team: "Manchester",
        played: 2,
        won: 1,
        drawn: 1,
        lost: 0,
        goalsFor: 4,
        goalsAgainst: 1,
        points: 4
      },
      {
        team: "Leeds",
        played: 3,
        won: 0,
        drawn: 1,
        lost: 2,
        goalsFor: 3,
        goalsAgainst: 7,
        points: 1
      }
    ]
  };

  const table = calculateTable(fixtures);
  expect(table).toEqual(expectedTable);
});
