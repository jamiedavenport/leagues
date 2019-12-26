import shuffle from "lodash/shuffle";
import { Fixture } from "./types";

export const generateFixtures = (teams: string[]): Fixture[] => {
  const fixtures: Fixture[] = [];

  for (let i = 0; i < teams.length; i++) {
    const t1 = teams[i];

    for (let j = i + 1; j < teams.length; j++) {
      const t2 = teams[j];

      const homeFixture: Fixture = {
        homeTeam: t1,
        awayTeam: t2
      };

      const awayFixture: Fixture = {
        homeTeam: t2,
        awayTeam: t1
      };

      fixtures.push(homeFixture, awayFixture);
    }
  }

  return shuffle(fixtures);
};
