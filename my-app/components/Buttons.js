import { styled } from "styled-components";

export default function Buttons({ children }) {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  transition: all 400ms;
  padding: 1rem;
  background-color: white;
  margin-top: 4rem;
  width: 100%;

  &:hover {
    background-color: #ff2f32;
  }
`;
