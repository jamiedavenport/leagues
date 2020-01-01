import { Fixture } from "../fixture/types";
import { Table, Standing } from "./types";
import values from "lodash/values";

interface Standings {
  [team: string]: Standing;
}

const sortStandings = (s1: Standing, s2: Standing): number => {
  const pointsDifference = s2.points - s1.points;
  if (pointsDifference === 0) {
    return s2.goalDifference - s1.goalDifference;
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
        standings[fixture.homeTeam] || new Standing(fixture.homeTeam);
      const awayStanding =
        standings[fixture.awayTeam] || new Standing(fixture.awayTeam);

      homeStanding.goalsFor += fixture.homeScore;
      homeStanding.goalsAgainst += fixture.awayScore;

      awayStanding.goalsFor += fixture.awayScore;
      awayStanding.goalsAgainst += fixture.homeScore;

      if (fixture.homeScore > fixture.awayScore) {
        // Home Victory
        homeStanding.won++;
        awayStanding.lost++;
      } else if (fixture.homeScore < fixture.awayScore) {
        // Away Victory
        awayStanding.won++;
        homeStanding.lost++;
      } else {
        // Draw
        homeStanding.drawn++;
        awayStanding.drawn++;
      }

      standings[fixture.homeTeam] = homeStanding;
      standings[fixture.awayTeam] = awayStanding;
    }
  });

  return {
    standings: values(standings).sort(sortStandings)
  };
};
