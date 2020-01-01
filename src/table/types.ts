export class Standing {
  constructor(readonly team: string) {}

  public won: number = 0;
  public drawn: number = 0;
  public lost: number = 0;

  public goalsFor: number = 0;
  public goalsAgainst: number = 0;

  get played(): number {
    return this.won + this.drawn + this.lost;
  }

  get points(): number {
    return this.won * 3 + this.drawn;
  }

  get goalDifference(): number {
    return this.goalsFor - this.goalsAgainst;
  }
}

export interface Table {
  standings: Standing[];
}
