import styled, { CreateStyled } from "@emotion/styled/macro";

export type Theme = {
  colours: {
    primary: string;
    dark: string;
    highlight: string;
  };

  page: {
    width: string;
    padding: string;
  };
  // ...
};

export default styled as CreateStyled<Theme>;
