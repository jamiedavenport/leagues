import React from "react";
import styled from "../styled";
import { colour, darker } from "../style/colour";

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  color: white;
  border: 1px solid ${colour("primary")};
  background-color: ${colour("primary")};
  cursor: pointer;
  font-weight: bold;
  outline: none;

  &:hover {
    background-color: ${darker("primary", 0.05)};
  }

  &:active {
    background-color: ${darker("primary", 0.1)};
  }
`;

export default Button;
