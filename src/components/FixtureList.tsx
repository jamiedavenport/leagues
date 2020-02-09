import React from "react";
import { Fixture } from "../fixture/types";
import FixtureResult from "./FixtureResult";
import Highlight from "./Highlight";
import styled from "../styled";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

interface Props {
  fixtures: Fixture[];
  gameDay: number;
  onChange: (fixtures: Fixture[]) => void;
}

const FixtureList: React.FC<Props> = ({ fixtures, gameDay, onChange }) => {
  const buffer = 3;
  const lower = Math.max(0, gameDay - buffer);
  const upper = Math.min(gameDay + buffer, fixtures.length - 1);

  const handleChangeFor = (index: number) => (updatedFixture: Fixture) => {
    const updatedFixtures = [...fixtures];
    updatedFixtures[index] = updatedFixture;
    onChange(updatedFixtures);
  };

  const list = [];
  for (let i = lower; i <= upper; i++) {
    let el = (
      <FixtureResult
        key={i}
        fixture={fixtures[i]}
        onChange={handleChangeFor(i)}
      />
    );

    if (i === gameDay) {
      el = (
        <Highlight key={i} title="Next Game">
          {el}
        </Highlight>
      );
    }

    list.push(el);
  }

  return <Container>{list}</Container>;
};

export default FixtureList;
