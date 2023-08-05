import useLocalStorageState from "use-local-storage-state";
import DiyForms from "../components/DiyForms";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ListDiy from "../components/ListDiy";

export default function Diy({ cards, setCards }) {
  /*const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });*/

  function handleAddTopic(newCard) {
    setCards([...cards, newCard]);
  }
  function handleDelete(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <>
      <Header />
      <DiyForms addOnSubmit={handleAddTopic} />
      <ListDiy cards={cards} handleDelete={handleDelete} />
      <Navbar />
    </>
  );
}
