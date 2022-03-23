import React, { useEffect } from "react";
import "../../component_styling/PokemonGrid.css";
import { useContext } from "react";

import MemoryCardContext from "../../context/MemoryCardContext";

const PokemonGrid = ({ children }) => {
  //gotta use the state in the primary parent component, cannot do this in the top layer at the app.js
  const { hasWon } = useContext(MemoryCardContext);
  useEffect(() => {
    console.log("has won in pokemon grid", hasWon);
  }, [hasWon]);
  return (
    <div className="grid-container">
      <div className="pokemonGrid">{children}</div>
    </div>
  );
};

export default PokemonGrid;
