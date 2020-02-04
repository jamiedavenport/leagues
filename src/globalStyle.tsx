import { css } from "@emotion/core";
import theme from "./theme.json";

export default css`
  html,
  body {
    padding: 0;
    margin: 0;

    background-color: ${theme.colours.dark};
    color: white;

    font-size: 18px;
    font-family: "Raleway", sans-serif;
  }
`;
