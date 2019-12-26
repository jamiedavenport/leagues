import { generateFixtures } from "../generate";

test("generate fixtures", () => {
  const teams = ["Doncaster", "Leeds", "Manchester"];

  const expectedFixtures = [
    {
      homeTeam: "Doncaster",
      awayTeam: "Leeds"
    },
    {
      homeTeam: "Leeds",
      awayTeam: "Doncaster"
    },
    {
      homeTeam: "Leeds",
      awayTeam: "Manchester"
    },
    {
      homeTeam: "Manchester",
      awayTeam: "Leeds"
    },
    {
      homeTeam: "Doncaster",
      awayTeam: "Manchester"
    },
    {
      homeTeam: "Manchester",
      awayTeam: "Doncaster"
    }
  ];
  const fixtures = generateFixtures(teams);

  expectedFixtures.forEach(fixture => expect(fixtures).toContainEqual(fixture));
});
