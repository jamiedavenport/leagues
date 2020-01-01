import { Table, Standing } from "./types";

export const emptyTable = (teams: string[]): Table => ({
  standings: teams.sort().map(team => new Standing(team))
});
