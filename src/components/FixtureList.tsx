import React from "react";
import { Fixture } from "../fixture/types";
import FixtureResult from "./FixtureResult";

interface Props {
  fixtures: Fixture[];
}

const FixtureList: React.FC<Props> = ({ fixtures }) => (
  <>
    <h2>Fixture List</h2>
    {fixtures.map(fixture => (
      <FixtureResult fixture={fixture} />
    ))}
  </>
);

export default FixtureList;
