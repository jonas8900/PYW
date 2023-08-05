import Link from "next/link";
import { styled } from "styled-components";

export default function Navbar() {
  return (
    <>
      <StyledList>
        <StyledLinks href="/Subpages/Diy">
          <StyledLi>Diy</StyledLi>
        </StyledLinks>
        <StyledLinks href="/Subpages/Kaufen">
          <StyledLi>Buy</StyledLi>
        </StyledLinks>
        <StyledLinks href="/Subpages/Todo">
          <StyledLi>To Do</StyledLi>
        </StyledLinks>
      </StyledList>
    </>
  );
}

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  align-items: center;
  text-align: center;
  margin: 0;
  width: 100%;
  border: 1px solid black;
  position: fixed;
  bottom: 0;
`;

export const StyledLinks = styled(Link)`
  border: 1px solid black;
  margin: auto;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #ff2f32;
  }
`;

export const StyledLi = styled.li`
  padding: 1rem;
  width: 100%;
  height: 100%;
  text-align: center;
`;
