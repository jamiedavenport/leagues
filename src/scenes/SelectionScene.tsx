import React from "react";
import Logo from "../components/Logo";
import TeamSelection from "../components/TeamSelection";
import Panels, { Panel } from "../components/Panels";
import Card, { CardHeader, CardBody, CardButton } from "../components/Card";
import Page from "../components/Page";
import Footer from "../components/Footer";
import styled from "../styled";
import Link from "../components/Link";

const About = styled.div`
  flex: 1;
`;

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
        <About>
          <p>
            Leagues is an application to generate football fixtures and compute
            the league table from the results.
          </p>
          <p>
            Built with Typescript, React and Netlify. The source code is
            available on{" "}
            <Link
              href="https://github.com/jamiedavenport/leagues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            .
          </p>
        </About>
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
