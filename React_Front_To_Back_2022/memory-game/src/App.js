import { useEffect, useContext } from "react";
import PokemonGrid from "./components/PokemonGameComponents/PokemonGrid";

import "./app_styling/app.css";

function App() {
  return (
    //need to pass down the props to each card and destructure them from within the card props. Then display the information and style the cards as necessary

    <PokemonGrid></PokemonGrid>
  );
}

export default App;
