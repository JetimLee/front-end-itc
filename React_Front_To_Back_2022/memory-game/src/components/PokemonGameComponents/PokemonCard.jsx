import React from "react";
import { useEffect, useContext } from "react";
import { MemoryCardProvider } from "../../context/MemoryCardContext";
import MemoryCardContext from "../../context/MemoryCardContext";

import "../../component_styling/PokemonCard.css";
//need to create a has won/loss state. loss will record the score, won will result in a new list of pokemon
//need to then see if the selectedCards array is equal to the cards array
const PokemonCard = ({ pokemonObj }) => {
  const { selectedCards, setSelectedCards, setHasLost } =
    useContext(MemoryCardContext);
  console.log("cards in pokemoncard");
  const selectCard = (pokemonObj) => {
    console.log("clicked");
    const updatedSelectedCards = [...selectedCards, pokemonObj];
    setSelectedCards(updatedSelectedCards);
    console.log("updated selected cards", updatedSelectedCards);

    //create hash map here to track for repeat cards selected
    let pokemonMap = {};
    for (let i = 0; i < updatedSelectedCards.length; i++) {
      console.log(updatedSelectedCards[i]);
      if (pokemonMap.hasOwnProperty(updatedSelectedCards[i].name)) {
        console.log("YOU LOSE!!!");
        setHasLost(true);
      } else {
        pokemonMap[updatedSelectedCards[i].name] = updatedSelectedCards[i].name;
        console.log("pokemon map", pokemonMap);
      }
    }
  };
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
