import React from "react";
import styled from "../styled";
import { transparent } from "../style/colour";

const Container = styled.div``;

const Title = styled.div`
  font-size: 0.9em;
  font-weight: 900;
  padding-left: 0.5rem;
`;

const Body = styled.div`
  background-color: ${transparent("highlight", 0.2)};
  padding: 1rem;
  border-radius: 0.5rem;
`;

interface Props {
  title: string;
}

const Highlight: React.FC<Props> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Body>{children}</Body>
  </Container>
);

export default Highlight;
