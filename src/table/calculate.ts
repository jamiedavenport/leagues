import { Fixture } from "../fixture/types";
import { Table, Standing } from "./types";
import values from "lodash/values";
import { zeroStanding } from "./util";

interface Standings {
  [team: string]: Standing;
}

const goalDifference = (standing: Standing): number => {
  return standing.goalsFor - standing.goalsAgainst;
};

const sortStandings = (s1: Standing, s2: Standing): number => {
  const pointsDifference = s2.points - s1.points;
  if (pointsDifference === 0) {
    return goalDifference(s2) - goalDifference(s1);
  }

  return pointsDifference;
};

export const calculateTable = (fixtures: Fixture[]): Table => {
  const standings: Standings = {};

  fixtures.forEach(fixture => {
    if (
      typeof fixture.homeScore !== "undefined" &&
      typeof fixture.awayScore !== "undefined"
    ) {
      const homeStanding =
        standings[fixture.homeTeam] || zeroStanding(fixture.homeTeam);
      const awayStanding =
        standings[fixture.awayTeam] || zeroStanding(fixture.awayTeam);

      homeStanding.played++;
      awayStanding.played++;

      homeStanding.goalsFor += fixture.homeScore;
      homeStanding.goalsAgainst += fixture.awayScore;

      awayStanding.goalsFor += fixture.awayScore;
      awayStanding.goalsAgainst += fixture.homeScore;

      if (fixture.homeScore > fixture.awayScore) {
        // Home Victory
        homeStanding.won++;
        awayStanding.lost++;

        homeStanding.points += 3;
      } else if (fixture.homeScore < fixture.awayScore) {
        // Away Victory
        awayStanding.won++;
        homeStanding.lost++;

        awayStanding.points += 3;
      } else {
        // Draw
        homeStanding.drawn++;
        awayStanding.drawn++;

        homeStanding.points++;
        awayStanding.points++;
      }

      standings[fixture.homeTeam] = homeStanding;
      standings[fixture.awayTeam] = awayStanding;
    }
  });

  return {
    standings: values(standings).sort(sortStandings)
  };
};
