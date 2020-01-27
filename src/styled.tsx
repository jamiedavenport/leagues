import styled, { CreateStyled } from "@emotion/styled/macro";

type Theme = {
  colours: {
    primary: string;
  };
  // ...
};

export default styled as CreateStyled<Theme>;
