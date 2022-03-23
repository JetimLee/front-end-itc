import React, { useEffect } from "react";
import "../../component_styling/PokemonGrid.css";
import PokemonCard from "./PokemonCard";
import Scoreboard from "./Scoreboard";
import { useContext } from "react";

import MemoryCardContext from "../../context/MemoryCardContext";

const PokemonGrid = ({ children }) => {
  //gotta use the state in the primary parent component, cannot do this in the top layer at the app.js
  const { hasWon, cards, setCards, pokemonAmount, hasLost } =
    useContext(MemoryCardContext);
  useEffect(() => {
    const loadPokemon = async () => {
      await getPokemon(pokemonAmount);
    };
    loadPokemon();
  }, []);

  const getPokemon = async (amountOfPokemon) => {
    console.log("GETTING POKEMON!");
    const pokemons = [];
    for (let i = 1; i <= amountOfPokemon; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokemonUrl);
      const pokemon = await response.json();
      const { id, name } = pokemon;
      const image = pokemon.sprites.front_default;
      pokemons.push({ id, name, image });
    }
    console.log(pokemons);
    setCards(pokemons);
    return pokemons;
  };
  useEffect(() => {
    console.log("has won in pokemon grid", hasLost);
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
