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
  const filteredDates = dates.filter((date) => date.parentID === currentId);

  function handleSubmitCardNote(event) {
    event.preventDefault();

    const inputNoteData = {
      id: uid(),
      parentID: currentId,
      isDone: false,
      name: event.target.notiz.value,
    };
    setDates([...dates, inputNoteData]);
    event.target.reset();
  }

  function handleCheckboxToggle(id) {
    const checked = dates.find((date) => date.id === id);
    if (checked) {
      setDates(
        dates.map((date) =>
          date.id === id ? { ...date, isDone: !date.isDone } : date
        )
      );
    }
  }

  function handleDeleteNoteButton(id) {
    setDates(dates.filter((filteredDate) => filteredDate.id !== id));
  }
  console.log(dates);

  return (
    <>
      <Header />
      {currentCards.map((currentCard) => (
        <StyledDiyNoteDiv key={currentId}>
          <h4>{currentCard.name}</h4>
          <StyledFormNoteDiv onSubmit={handleSubmitCardNote}>
            <label htmlFor="cardDetail">Notizen: </label>
            <textarea
              id="cardDetail"
              name="notiz"
              rows="5"
              placeholder="type your note here..."
              required
            ></textarea>
            <button type="submit">Notiz hinzufügen</button>
          </StyledFormNoteDiv>
          <p>Stichtag: {currentCard.date}</p>
        </StyledDiyNoteDiv>
      ))}
      <StyledUl>
        {filteredDates.map((data) => (
          <StyledListItem key={data.id}>
            <p>{data.name}</p>
            <input
              type="checkbox"
              onChange={() => handleCheckboxToggle(data.id)}
              checked={data.isDone}
            ></input>
            {data.isDone && (
              <button
                type="button"
                onClick={() => handleDeleteNoteButton(data.id)}
              >
                Delete
              </button>
            )}
          </StyledListItem>
        ))}
      </StyledUl>

      <Navbar />
    </>
  );
}

const StyledDiyNoteDiv = styled.section`
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

const StyledUl = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-end;
`;

const StyledListItem = styled.li`
  text-align: center;
  display: flex;
  gap: 1rem;
  border: 1px solid black;
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
  padding: 2rem;
`;

/* text-decoration: ${({ $ischecked }) =>
    $ischecked ? "line-through" : "none"};*/

/* ${({ $isOnFire }) => ($isOnFire ? "🔥" : "❄️")};*/
