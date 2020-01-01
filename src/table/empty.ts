import { Table } from "./types";
import { zeroStanding } from "./util";

export const emptyTable = (teams: string[]): Table => ({
  standings: teams.sort().map(team => zeroStanding(team))
});
