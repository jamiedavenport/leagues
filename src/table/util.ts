import { Standing } from "./types";

export const zeroStanding = (team: string): Standing => ({
  team,
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  points: 0
});
