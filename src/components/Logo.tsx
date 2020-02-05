import React from "react";
import styled from "../styled";
import { colour, darker } from "../style/colour";

const Header = styled.h1`
  margin: 0;
`;

const Subheader = styled.p`
  margin: 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${colour("primary")};

  &:hover {
    color: ${darker("primary", 0.05)};
  }
`;

const Logo: React.FC = () => (
  <div>
    <Header>Leagues</Header>
    <Subheader>
      Made by{" "}
      <Link
        href="https://jamiedavenport.dev"
        target="_blanks"
        rel="noopener noreferrer"
      >
        Jamie Davenport
      </Link>
    </Subheader>
  </div>
);

export default Logo;
