import styled from "../styled";

const Panels = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 0.5rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.5rem;
`;

export default Panels;
