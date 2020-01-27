import React, { FormEvent } from "react";
import { Fixture } from "../fixture/types";
import Input from "./Input";

interface Props {
  fixture: Fixture;
  onChange: (fixture: Fixture) => void;
}

const getScore = (e: FormEvent<HTMLInputElement>) => {
  const val = e.currentTarget.value;
  if (val.trim() === "") {
    return undefined;
  }

  const score = +val;
  if (isNaN(score)) {
    return undefined;
  }

  return score;
};

const FixtureResult: React.FC<Props> = ({ fixture, onChange }) => {
  const handleHomeChange = (e: FormEvent<HTMLInputElement>) => {
    onChange({
      ...fixture,
      homeScore: getScore(e)
    });
  };

  const handleAwayChange = (e: FormEvent<HTMLInputElement>) => {
    onChange({
      ...fixture,
      awayScore: getScore(e)
    });
  };

  return (
    <div>
      <Input value={fixture.homeScore || ""} onChange={handleHomeChange} />
      {fixture.homeTeam} - {fixture.awayTeam}
      <Input value={fixture.awayScore || ""} onChange={handleAwayChange} />
    </div>
  );
};

export default FixtureResult;
