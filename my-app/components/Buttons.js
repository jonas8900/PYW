import { styled } from "styled-components";

export default function Buttons({ children }) {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
    transition: all 400ms;
  padding: 1rem;
  background-color: white;

  &:hover {
    
    background-color: #ff2f32;
    
  }
`;
