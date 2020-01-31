import React from "react";
import AddTeamForm from "./AddTeamForm";
import styled from "../styled";

interface Props {
  teams: string[];
  onCreateTeam: (team: string) => void;
}

const Container = styled.div``;

const Row = styled.div`
  padding: 0.5rem;

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const TeamSelection: React.FC<Props> = ({ teams, onCreateTeam }) => (
  <Container>
    {teams.map(team => (
      <Row key={team}>{team}</Row>
    ))}
    <AddTeamForm onSubmit={onCreateTeam} />
  </Container>
);

export default TeamSelection;
