import { createContext, useState } from "react";

const MemoryCardContext = createContext();

export const MemoryCardProvider = ({ children }) => {
  //added three pieces of state here - has lost, has won and is playing
  //need to conditionally render in the app if the player is playing or not
  //need to make new functionality that if the player wins then a new api is called and more pokemon are loaded
  //displayed list needs to be shuffled each time the list is rendered
  //if player loses scoreboard component is displayed

  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [pokemonAmount, setPokemonAmount] = useState(3);

  //function that determines if two arrays have the exact same elements or not - used in determining if the player has won or not.
  //cannot really just compare lengths since the player in theory could just click the wrong card and that would result in both winning and losing if the lengths of the two arrays are the same

  function areEqual(array1, array2) {
    if (array1.length === array2.length) {
      return array1.every((element) => {
        if (array2.includes(element)) {
          console.log("equal!!!");
          setHasWon(true);
          return true;
        }

        return false;
      });
    }

    return false;
  }

  //select card contains the logic for winning/losing since each turn a check needs to be made if the player has won or loss
  const selectCard = (pokemonObj) => {
    const updatedSelectedCards = [...selectedCards, pokemonObj];
    setSelectedCards(updatedSelectedCards);

    //create hash map here to track for repeat cards selected
    let pokemonMap = {};
    for (let i = 0; i < updatedSelectedCards.length; i++) {
      if (pokemonMap.hasOwnProperty(updatedSelectedCards[i].name)) {
        console.log("YOU LOSE!!!");
        setHasLost(true);
      } else {
        pokemonMap[updatedSelectedCards[i].name] = updatedSelectedCards[i].name;
        let shuffledArray = shuffleArray(cards);
        setCards(shuffledArray);
      }
    }
    //check if player won
    areEqual(cards, updatedSelectedCards);
  };

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
    const shuffledArray = shuffleArray(pokemons);
    setCards(shuffledArray);
  };
  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    console.log("shuffled array", array);
    return array;
  }

  //here are the values returned from context
  return (
    <MemoryCardContext.Provider
      value={{
        setSelectedCards,
        setPokemonAmount,
        setCards,
        cards,
        selectedCards,
        pokemonAmount,
        hasWon,
        setHasLost,
        hasLost,
        setHasWon,
        shuffleArray,
        getPokemon,
        selectCard,
      }}
    >
      {children}
    </MemoryCardContext.Provider>
  );
};

export default MemoryCardContext;
