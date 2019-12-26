import React from "react";
import { Fixture } from "../fixture/types";

interface Props {
  fixtures: Fixture[];
}

const FixtureList: React.FC<Props> = ({ fixtures }) => (
  <>
    <h2>Fixture List</h2>
    <ul>
      {fixtures.map(fixture => (
        <li>
          {fixture.homeTeam} - {fixture.awayTeam}
        </li>
      ))}
    </ul>
  </>
);

export default FixtureList;
