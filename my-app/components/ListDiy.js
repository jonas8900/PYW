import Link from "next/link";
import { styled } from "styled-components";

export default function ListDiy({ cards, handleDelete }) {
  return (
    <>
      <StyledCardDiv>
        {cards.map((card) => (
          <StyledFormDiv key={card.id}>
            <StyledDeleteButton
              key={card.id}
              onClick={() => handleDelete(card.id)}
              type="button"
            >
              X
            </StyledDeleteButton>
            <h3>{card.date}</h3>
            <p>{card.name}</p>
            <Link href={`/Subpages/${card.id}`}>
              <StyledNotesButton>make notes</StyledNotesButton>
            </Link>
          </StyledFormDiv>
        ))}
      </StyledCardDiv>
    </>
  );
}

const StyledCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;
`;

const StyledFormDiv = styled.section`
  position: relative;
  transition: all 400ms;
  width: 50%;
  max-width: 500px;
  align-self: center;
  text-align: center;
  border: 1px solid black;
  margin-top: 2rem;
  border-radius: 22px;
  border-bottom-right-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: white;
  padding: 2%;

  &:hover {
    background-color: #ff2f32;
  }
`;

const StyledNotesButton = styled.button`
  transition: all 400ms;
  padding: 1rem;
  background-color: white;
  margin: 1rem 1rem;

  &:hover {
    background-color: #ff2f32;
  }
`;
