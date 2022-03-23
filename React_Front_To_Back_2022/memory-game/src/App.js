import { useEffect, useContext } from "react";
import { MemoryCardProvider } from "./context/MemoryCardContext";
import MemoryCardContext from "./context/MemoryCardContext";
import PokemonGrid from "./components/PokemonGameComponents/PokemonGrid";
import PokemonCard from "./components/PokemonGameComponents/PokemonCard";
import "./app_styling/app.css";

function App() {
  return (
    //need to pass down the props to each card and destructure them from within the card props. Then display the information and style the cards as necessary
    <MemoryCardProvider>
      <PokemonGrid></PokemonGrid>
    </MemoryCardProvider>
  );
}

export default App;
