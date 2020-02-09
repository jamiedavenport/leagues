import React from "react";
import Logo from "../components/Logo";
import TeamSelection from "../components/TeamSelection";
import Panels, { Panel } from "../components/Panels";
import Card, { CardHeader, CardBody, CardButton } from "../components/Card";
import Page from "../components/Page";
import Footer from "../components/Footer";

interface Props {
  teams: string[];
  onCreateTeam: (team: string) => void;
  onStart: () => void;
}

const SelectionScene: React.FC<Props> = ({ teams, onCreateTeam, onStart }) => (
  <Page>
    <Panels>
      <Panel>
        <Logo />
        <Footer />
      </Panel>
      <Panel>
        <Card>
          <CardHeader>Team Selection</CardHeader>
          <CardBody>
            <TeamSelection teams={teams} onCreateTeam={onCreateTeam} />
          </CardBody>
          <CardButton onClick={onStart}>START</CardButton>
        </Card>
      </Panel>
    </Panels>
  </Page>
);

export default SelectionScene;
