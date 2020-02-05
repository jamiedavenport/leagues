import styled from "../styled";
import { colour, darker } from "../style/colour";

const Card = styled.div`
  background-color: white;
  color: ${colour("dark")};
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
`;

export const CardHeader = styled.div`
  text-align: center;

  font-size: 1.1em;
  font-weight: 900;

  padding: 0.75rem;
`;

export const CardBody = styled.div``;

export const CardButton = styled.button`
  background-color: ${colour("primary")};
  color: white;

  width: 100%;

  font-size: 1.1em;
  font-weight: 900;

  padding: 0.75rem;
  border-radius: 0 0 0.5rem 0.5rem;

  outline: none;
  border: 0;

  &:hover {
    background-color: ${darker("primary", 0.05)};
  }

  &:active {
    background-color: ${darker("primary", 0.1)};
  }
`;

export default Card;
