import React from "react";
import styled from "../styled";

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.15rem;
  border: 1px solid ${props => props.theme.colours.primary};
  background-color: ${props => props.theme.colours.primary};
  cursor: pointer;
  font-weight: bold;
  outline: none;
`;

export default Button;
