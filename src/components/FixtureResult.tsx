import React from "react";
import { Fixture } from "../fixture/types";

interface Props {
  fixture: Fixture;
}

const FixtureResult: React.FC<Props> = ({ fixture }) => (
  <div>
    <input value={fixture.homeScore || ""} />
    {fixture.homeTeam} - {fixture.awayTeam}
    <input value={fixture.awayScore || ""} />
  </div>
);

export default FixtureResult;
