import styled from "../styled";

const Page = styled.div`
  @media (min-width: ${props => props.theme.page.width}) {
    width: ${props => props.theme.page.width};
    margin: 0 auto;
  }
`;

export default Page;
