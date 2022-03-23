import React, { useEffect } from "react";
import "../../component_styling/PokemonGrid.css";
import PokemonCard from "./PokemonCard";
import Scoreboard from "./Scoreboard";
import { useContext } from "react";

import MemoryCardContext from "../../context/MemoryCardContext";

const PokemonGrid = ({ children }) => {
  //gotta use the state in the primary parent component, cannot do this in the top layer at the app.js
  const { hasWon, cards, pokemonAmount, hasLost, getPokemon } =
    useContext(MemoryCardContext);
  useEffect(() => {
    const loadPokemon = async () => {
      await getPokemon(pokemonAmount);
    };
    loadPokemon();
  }, []);

  useEffect(() => {
    console.log("has lost", hasLost);
  }, [hasLost]);
  return (
    <div className="grid-container">
      {hasLost ? (
        <Scoreboard />
      ) : (
        <div className="pokemonGrid">
          {cards.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemonObj={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PokemonGrid;
