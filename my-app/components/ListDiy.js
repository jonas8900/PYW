import { styled } from "styled-components";

export default function ListDiy({ cards }) {
  return (
    <>
      <StyledCardDiv>
        {cards.map((card) => (
          <>
            <h3 key={card.id}>{card.date}</h3>
            <p>{card.name}</p>
          </>
        ))}
      </StyledCardDiv>
    </>
  );
}

const StyledCardDiv = styled.div`
  border: 1px solid black;
  align-items: center;
  text-align: center    ;
`;
