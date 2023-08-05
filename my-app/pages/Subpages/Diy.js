import useLocalStorageState from "use-local-storage-state";
import DiyForms from "../../components/DiyForms";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ListDiy from "../../components/ListDiy";

export default function Diy() {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });

  function handleAddTopic(newCard) {
    setCards([...cards, newCard]);
  }
  console.log(cards);

  return (
    <>
      <Header />
      <DiyForms addOnSubmit={handleAddTopic} />
      <ListDiy cards={cards} />
      <Navbar />
    </>
  );
}
