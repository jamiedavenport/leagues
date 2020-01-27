import styled, { CreateStyled } from "@emotion/styled/macro";

export type Theme = {
  colours: {
    primary: string;
  };
  // ...
};

export default styled as CreateStyled<Theme>;
