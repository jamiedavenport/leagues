import React from "react";
import { Fixture } from "../fixture/types";
import FixtureResult from "./FixtureResult";

interface Props {
  fixtures: Fixture[];
  onChange: (fixtures: Fixture[]) => void;
}

const FixtureList: React.FC<Props> = ({ fixtures, onChange }) => (
  <>
    <h2>Fixture List</h2>
    {fixtures.map((fixture, index) => {
      const handleChange = (updatedFixture: Fixture) => {
        const updatedFixtures = [...fixtures];
        updatedFixtures[index] = updatedFixture;
        onChange(updatedFixtures);
      };

      return (
        <FixtureResult
          key={`${fixture.homeTeam}-${fixture.awayTeam}`}
          fixture={fixture}
          onChange={handleChange}
        />
      );
    })}
  </>
);

export default FixtureList;
