import React from "react";
import styled from "../styled";

const Img = styled.img`
  width: 150px;
  border-radius: 20px;
`;

const Logo: React.FC = () => <Img src="/logo.svg" alt="Leagues" />;

export default Logo;
