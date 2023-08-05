import { useRouter } from "next/router";

export default function DiyNotesRouter({ cards }) {
  const router = useRouter();

  const currentId = router.query.DiyNotes;

  const currentCard = cards.filter((card) => card.id === currentId);
  console.log(currentCard);

  return (
    <>
      <h1>hi</h1>
    </>
  );
}
