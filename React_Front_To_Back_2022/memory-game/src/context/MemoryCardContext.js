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

  return (
    <MemoryCardContext.Provider
      value={{
        setSelectedCards,
        setPokemonAmount,
        setCards,
        cards,
        selectedCards,
        pokemonAmount,
      }}
    >
      {children}
    </MemoryCardContext.Provider>
  );
};

export default MemoryCardContext;
