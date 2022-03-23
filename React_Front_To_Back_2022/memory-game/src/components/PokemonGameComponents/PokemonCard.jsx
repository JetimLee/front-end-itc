import React from "react";
import { useEffect, useContext } from "react";
import { MemoryCardProvider } from "../../context/MemoryCardContext";
import MemoryCardContext from "../../context/MemoryCardContext";

import "../../component_styling/PokemonCard.css";
//need to create a has won/loss state. loss will record the score, won will result in a new list of pokemon
//need to then see if the selectedCards array is equal to the cards array
const PokemonCard = ({ pokemonObj }) => {
  const { selectCard } = useContext(MemoryCardContext);

  const { image, name } = pokemonObj;
  return (
    <div onClick={() => selectCard(pokemonObj)} className="card-container">
      <div className="card">
        <img src={image} alt={"a pokemion card"} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
