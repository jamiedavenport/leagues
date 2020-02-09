import styled from "../styled";
import { colour } from "../style/colour";

const size = "2.5rem";

const ScoreInput = styled.input`
  width: ${size};
  height: ${size};

  border: none;
  outline: none;
  background-color: ${colour("highlight")};
  color: ${colour("dark")};

  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  &::placeholder {
    color: ${colour("dark")};
  }
`;

export default ScoreInput;
