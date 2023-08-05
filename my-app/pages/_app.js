import "../styles/globals.css";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

function MyApp({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} cards={cards} setCards={setCards} />
    </>
  );
}

export default MyApp;
