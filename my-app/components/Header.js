import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import Backbutton from "./Backbutton";

export default function Header() {
  return (
    <>
      <StyledHeadlineDiv>
        <Backbutton></Backbutton>
        <Link href="/">
          <StyledHeadline>Plan your wedding</StyledHeadline>
        </Link>
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
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: space-between;
  width: 100%;
`;

const StyledBackButton = styled(Link)`
  margin-top: 1.4rem;
`;

const StyledImage = styled(Image)``;
