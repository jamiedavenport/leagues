import { calculateTable } from "../calculate";
import { Fixture } from "../../fixture/types";

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

  const table = calculateTable(fixtures);
  expect(table.standings[0].team).toEqual("Doncaster");
  expect(table.standings[1].team).toEqual("Manchester");
  expect(table.standings[2].team).toEqual("Leeds");

  expect(table.standings[0].points).toBe(5);
  expect(table.standings[1].points).toBe(4);
  expect(table.standings[2].points).toBe(1);
});
