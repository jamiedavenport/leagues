import React from "react";
import Logo from "../components/Logo";
import TeamSelection from "../components/TeamSelection";
import Button from "../components/Button";
import styled from "../styled";
import { colour } from "../style/colour";

const Page = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 1;

  width: 100%;

  margin: 0 auto;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;

  @media (min-width: 400px) {
    width: 40%;
    min-width: 400px;
  }
`;

const Body = styled.div`
  /* background-color: red; */
  border: 1px solid #4d4d4d;

  flex: 1;

  margin: 0.5rem 0;

  display: flex;
  flex-direction: column;
`;

const TeamSelectionWrapper = styled.div`
  flex: 1;

  background-color: #fafafa;
`;

const TeamSelectionHeader = styled.p`
  padding: 0.5rem;
  margin: 0;

  font-size: 1.2rem;
  font-weight: bold;
`;

const Header = styled.div``;

const Footer = styled.div`
  font-size: 0.8em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StartButton = styled(Button)``;

interface Props {
  teams: string[];
  onCreateTeam: (team: string) => void;
  onStart: () => void;
}

const SelectionScene: React.FC<Props> = ({ teams, onCreateTeam, onStart }) => (
  <Page>
    <Container>
      <Header>
        <Logo />
      </Header>
      <Body>
        <TeamSelectionWrapper>
          <TeamSelectionHeader>Team Selection</TeamSelectionHeader>
          <TeamSelection teams={teams} onCreateTeam={onCreateTeam} />
        </TeamSelectionWrapper>
        <StartButton onClick={onStart}>Start</StartButton>
      </Body>
      <Footer>
        <span>
          Made by{" "}
          <a
            href="https://jamiedavenport.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jamie Davenport
          </a>
        </span>
        <span>Copyright &copy; 2020</span>
      </Footer>
    </Container>
  </Page>

  // <Container>
  //   <Logo />
  //   <h1>Leagues</h1>
  //   <TeamSelection teams={teams} onCreateTeam={onCreateTeam} />
  //   <StartButton onClick={onStart}>Start</StartButton>
  // </Container>
);

export default SelectionScene;
