import styled from "../styled";

const Page = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  @media (min-width: ${props => props.theme.page.width}) {
    width: ${props => props.theme.page.width};
    margin: 0 auto;
  }
`;

export default Page;
