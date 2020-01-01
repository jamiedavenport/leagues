export interface Standing {
  team: string;

  played: number;
  won: number;
  drawn: number;
  lost: number;

  goalsFor: number;
  goalsAgainst: number;

  points: number;
}

export interface Table {
  standings: Standing[];
}
