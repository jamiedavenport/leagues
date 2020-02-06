import React from "react";
import AddTeamForm from "./AddTeamForm";
import styled from "../styled";
import List, { ListItem } from "./List";

interface Props {
  teams: string[];
  onCreateTeam: (team: string) => void;
}

const TeamSelection: React.FC<Props> = ({ teams, onCreateTeam }) => (
  <List>
    {teams.map(team => (
      <ListItem key={team}>{team}</ListItem>
    ))}
    <ListItem>
      <AddTeamForm onSubmit={onCreateTeam} />
    </ListItem>
  </List>
);

export default TeamSelection;
