import styled from "../styled";

const List = styled.div``;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0.5rem 1rem;

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default List;
