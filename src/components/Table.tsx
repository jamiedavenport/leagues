import styled from "../styled";

const Table = styled.table`
  width: 100%;
  flex-direction: column;
  border-spacing: 0;
`;

export const Row = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.th`
  padding: 0.25rem;

  font-size: 0.9em;
  font-weight: bold;
  text-align: start;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const Col = styled.td`
  padding: 0.25rem;
`;

export default Table;
