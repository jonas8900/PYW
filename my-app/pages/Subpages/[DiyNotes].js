import { useRouter } from "next/router";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { styled } from "styled-components";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function DiyNotesRouter({ cards }) {
  const router = useRouter();

  const [dates, setDates] = useLocalStorageState("dates", { defaultValue: [] });

  const currentId = router.query.DiyNotes;

  const currentCards = cards.filter((card) => card.id === currentId);

  function handleSubmitCardNote(event) {
    event.preventDefault;

    const inputNoteData = {
      id: uid(),
      name: event.target.notiz.value,
    };
    setDates([inputNoteData]);
  }
  console.log(dates);

  return (
    <>
      <Header />
      {currentCards.map((currentCard) => (
        <>
          <StyledDiyNoteDiv key={currentId}>
            <h4>{currentCard.name}</h4>
            <StyledFormNoteDiv onSubmit={handleSubmitCardNote}>
              <label htmlFor="cardDetail">Notizen: </label>
              <textarea
                id="cardDetail"
                name="notiz"
                rows="5"
                placeholder="type your note here..."
              ></textarea>
              <button type="submit">Notiz hinzufügen</button>
            </StyledFormNoteDiv>
            <p>Stichtag: {currentCard.date}</p>
          </StyledDiyNoteDiv>
        </>
      ))}
      {dates.map((data) => (
        <>
          <p>{data.name}</p>
        </>
      ))}

      <Navbar />
    </>
  );
}

const StyledDiyNoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const StyledFormNoteDiv = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
