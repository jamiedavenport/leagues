import React from "react";
import AddTeamForm from "./AddTeamForm";

interface Props {
  teams: string[];
  onCreateTeam: (team: string) => void;
}

const TeamSelection: React.FC<Props> = ({ teams, onCreateTeam }) => (
  <>
    {teams.map(team => (
      <div key={team}>{team}</div>
    ))}
    <AddTeamForm onSubmit={onCreateTeam} />
  </>
);

export default TeamSelection;
