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
  const [pokemonAmount, setPokemonAmount] = useState(12);
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
      }}
    >
      {children}
    </MemoryCardContext.Provider>
  );
};

export default MemoryCardContext;
