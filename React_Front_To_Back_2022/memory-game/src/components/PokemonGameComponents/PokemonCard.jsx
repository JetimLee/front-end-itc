import React from "react";
import { useEffect, useContext } from "react";
import { MemoryCardProvider } from "../../context/MemoryCardContext";
import MemoryCardContext from "../../context/MemoryCardContext";

import "../../component_styling/PokemonCard.css";

const PokemonCard = ({ pokemonObj }) => {
  const { selectedCards } = useContext(MemoryCardContext);
  const chooseCard = (pokemon) => {
    console.log(pokemon);

    selectedCards.push(pokemon);
  };
  const { image, name } = pokemonObj;
  return (
    <div onClick={() => chooseCard(pokemonObj)} className="card-container">
      <div className="card">
        <img src={image} alt={"a pokemion card"} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
