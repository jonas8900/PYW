import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export default function Backbutton() {
  return (
    <StyledBackButton href="/">
      <StyledImage
        src="/go-back-arrow.svg"
        width={40}
        height={40}
        alt="an Arrow to go back to Homescreen"
      ></StyledImage>
    </StyledBackButton>
  );
}

const StyledBackButton = styled(Link)`
  margin-top: 1.4rem;
`;

const StyledImage = styled(Image)``;
