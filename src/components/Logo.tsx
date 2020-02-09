import React from "react";
import styled from "../styled";
import Link from "./Link";

const Header = styled.h1`
  margin: 0;
`;

const Subheader = styled.p`
  margin: 0;
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
