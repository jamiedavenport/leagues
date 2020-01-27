import React from "react";
import Logo from "../components/Logo";
import TeamSelection from "../components/TeamSelection";
import Button from "../components/Button";
import styled from "../styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  width: 600px;
  margin: 0 auto;
`;

const StartButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

interface Props {
  teams: string[];
  onCreateTeam: (team: string) => void;
  onStart: () => void;
}

const SelectionScene: React.FC<Props> = ({ teams, onCreateTeam, onStart }) => (
  <Container>
    <Logo />
    <h1>Leagues</h1>
    <TeamSelection teams={teams} onCreateTeam={onCreateTeam} />
    <StartButton onClick={onStart}>Start</StartButton>
  </Container>
);

export default SelectionScene;
