import styled from "../styled";
import { colour } from "../style/colour";

const ScoreInput = styled.input`
  width: 1.5rem;

  resize: horizontal;

  border: none;
  outline: none;
  background-color: ${colour("highlight")};

  padding: 0.5rem;

  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

export default ScoreInput;
