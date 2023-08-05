import { styled } from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeadlineDiv>
        <StyledHeadline>Plan your wedding</StyledHeadline>
      </StyledHeadlineDiv>
    </>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledHeadlineDiv = styled.div`
  padding: 1rem;
  border: 1px solid;
`;
