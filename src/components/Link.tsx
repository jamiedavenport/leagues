import styled from "../styled";
import { colour, darker } from "../style/colour";

const Link = styled.a`
  text-decoration: none;
  color: ${colour("primary")};

  &:hover {
    color: ${darker("primary", 0.05)};
  }
`;

export default Link;
