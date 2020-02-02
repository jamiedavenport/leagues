import styled, { CreateStyled } from "@emotion/styled/macro";

export type Theme = {
  colours: {
    primary: string;
    highlight: string;
  };
  // ...
};

export default styled as CreateStyled<Theme>;
