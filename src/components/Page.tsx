import React from "react";
import styled from "../styled";

const Container = styled.div`
  @media (min-width: ${props => props.theme.page.width}) {
    width: ${props => props.theme.page.width};
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: ${props => props.theme.page.padding};
`;

const Page: React.FC = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Page;
