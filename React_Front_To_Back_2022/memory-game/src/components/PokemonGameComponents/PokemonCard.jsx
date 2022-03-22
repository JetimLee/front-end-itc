import React from "react";
import { useEffect, useContext } from "react";
import { MemoryCardProvider } from "../../context/MemoryCardContext";
import MemoryCardContext from "../../context/MemoryCardContext";

import "../../component_styling/PokemonCard.css";
//move this to the parent component? may not be necessary with context...
const PokemonCard = ({ pokemonObj }) => {
  const { selectedCards, setSelectedCards } = useContext(MemoryCardContext);
  const selectedCard = (pokemonObj) => {
    console.log("clicked");
    setSelectedCards([...selectedCards, pokemonObj]);
    console.log(selectedCards);
  };
  const { image, name } = pokemonObj;
  return (
    <div onClick={() => selectedCard(pokemonObj)} className="card-container">
      <div className="card">
        <img src={image} alt={"a pokemion card"} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
