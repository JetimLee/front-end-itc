import { useEffect, useContext } from "react";
import PokemonGrid from "./components/PokemonGameComponents/PokemonGrid";
import Scoreboard from "./components/PokemonGameComponents/Scoreboard.jsx";
import MemoryCardContext from "./context/MemoryCardContext";
import GameContainer from "./components/UIComponents/GameContainer";
import PlayAgain from "./components/PokemonGameComponents/PlayAgain";

import "./app_styling/app.css";

function App() {
  const { hasLost, isPlaying } = useContext(MemoryCardContext);

  return (
    //need to pass down the props to each card and destructure them from within the card props. Then display the information and style the cards as necessary
    <GameContainer>
      <Scoreboard />
      {hasLost ? <PlayAgain /> : <PokemonGrid></PokemonGrid>}
    </GameContainer>
  );
}

export default App;
