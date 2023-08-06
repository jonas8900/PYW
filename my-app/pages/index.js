import { styled } from "styled-components";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <StyledUlForHomescreen>
        <StyledHomescreenLink href="/Diy">
          <Buttons>Do it Yourself</Buttons>
        </StyledHomescreenLink>
        <StyledHomescreenLink href="/Kaufen">
          <Buttons>Buy</Buttons>
        </StyledHomescreenLink>
        <StyledHomescreenLink href="/Todo">
          <Buttons>To Do</Buttons>
        </StyledHomescreenLink>
      </StyledUlForHomescreen>
    </>
  );
}

const StyledUlForHomescreen = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 200px;
  align-self: center;
  text-align: center;
`;

const StyledHomescreenLink = styled(Link)`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;
