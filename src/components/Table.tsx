import styled from "../styled";
import { css } from "@emotion/core";

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const rowStyle = css`
  display: flex;
  flex-direction: row;

  padding: 0.25rem;
`;

export const Row = styled.div`
  ${rowStyle};

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.div`
  ${rowStyle};

  font-weight: bold;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const Col = styled.div`
  flex: 1;

  padding: 0.25rem;
`;

export default Table;
