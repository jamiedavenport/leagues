import React from "react";
import { Fixture } from "../fixture/types";
import FixtureResult from "./FixtureResult";
import Highlight from "./Highlight";
import styled from "../styled";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Buffer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface Props {
  fixtures: Fixture[];
  gameDay: number;
  onChange: (fixtures: Fixture[]) => void;
  nextGame: () => void;
}

const FixtureList: React.FC<Props> = ({
  fixtures,
  gameDay,
  onChange,
  nextGame
}) => {
  const buffer = 3;
  const lower = Math.max(0, gameDay - buffer);
  const upper = Math.min(gameDay + buffer, fixtures.length - 1);

  const handleChangeFor = (index: number) => (updatedFixture: Fixture) => {
    const updatedFixtures = [...fixtures];
    updatedFixtures[index] = updatedFixture;
    onChange(updatedFixtures);

    if (
      index === gameDay &&
      typeof updatedFixture.homeScore !== "undefined" &&
      typeof updatedFixture.awayScore !== "undefined"
    ) {
      nextGame();
    }
  };

  const prev = [];
  let current;
  const next = [];
  for (let i = lower; i <= upper; i++) {
    let el = (
      <FixtureResult
        key={i}
        fixture={fixtures[i]}
        onChange={handleChangeFor(i)}
      />
    );

    if (i < gameDay) {
      prev.push(el);
    } else if (i === gameDay) {
      current = <Highlight title="Next Game">{el}</Highlight>;
    } else {
      next.push(el);
    }
  }

  return (
    <Container>
      <Buffer>{prev}</Buffer>
      {current}
      <Buffer>{next}</Buffer>
    </Container>
  );
};

export default FixtureList;
