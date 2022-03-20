import React from "react";
import "../../component_styling/PokemonGrid.css";

const PokemonGrid = ({ children }) => {
  return (
    <div className="grid-container">
      <div className="pokemonGrid">{children}</div>
    </div>
  );
};

export default PokemonGrid;
