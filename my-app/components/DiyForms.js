import { uid } from "uid";
import { styled } from "styled-components";

export default function DiyForms({ addOnSubmit }) {
  function handleSubmitEvent(event) {
    event.preventDefault();

    const inputData = {
      id: uid(),
      name: event.target.name.value,
      date: event.target.shouldReady.value,
    };

    addOnSubmit(inputData);
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmitEvent}>
        <label htmlFor="DiyInput">Thema: </label>
        <textarea
          id="DiyInput"
          name="name"
          type="text"
          placeholder="type here..."
        ></textarea>
        <label htmlFor="DiyDateInput">Erledigt bis: </label>
        <input id="DiyDateInput" type="date" name="shouldReady"></input>
        <StyledSubmitButton type="submit">Thema erstellen</StyledSubmitButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  padding: 2rem;
  align-items: center;
  margin: auto;
  justify-content: space-between;
`;

const StyledSubmitButton = styled.button`
  transition: all 400ms;
  padding: 1rem;
  background-color: white;
  margin-top: 1rem;

  &:hover {
    background-color: #ff2f32;
  }
`;
