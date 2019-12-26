import React from "react";
import AddTeamForm from "./AddTeamForm";

interface Props {
  teams: string[];
  onCreateTeam: (team: string) => void;
}

const TeamSelection: React.FC<Props> = ({ teams, onCreateTeam }) => (
  <>
    <h2>Team Selection</h2>
    <ul>
      {teams.map(team => (
        <li>{team}</li>
      ))}
    </ul>
    <AddTeamForm onSubmit={onCreateTeam} />
  </>
);

export default TeamSelection;
