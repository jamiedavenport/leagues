import React, { FormEvent } from "react";
import { Fixture } from "../fixture/types";
import styled from "../styled";
import ScoreInput from "./ScoreInput";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TeamName = styled.div`
  flex: 1;
  font-size: 1.2em;
`;

const HomeTeam = styled(TeamName)`
  text-align: right;
  margin-right: 1rem;
`;

const AwayTeam = styled(TeamName)`
  text-align: left;
  margin-left: 1rem;
`;

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
    e.preventDefault();

    onChange({
      ...fixture,
      homeScore: getScore(e)
    });
  };

  const handleAwayChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    onChange({
      ...fixture,
      awayScore: getScore(e)
    });
  };

  return (
    <Container>
      <HomeTeam>{fixture.homeTeam}</HomeTeam>
      <ScoreInput
        value={fixture.homeScore || ""}
        onChange={handleHomeChange}
        placeholder="-"
      />
      <ScoreInput
        value={fixture.awayScore || ""}
        onChange={handleAwayChange}
        placeholder="-"
      />
      <AwayTeam>{fixture.awayTeam}</AwayTeam>
    </Container>
  );
};

export default FixtureResult;
