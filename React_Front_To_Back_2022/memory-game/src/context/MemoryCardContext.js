import { createContext, useState } from "react";

const MemoryCardContext = createContext();

export const MemoryCardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [pokemonAmount, setPokemonAmount] = useState(12);

  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <MemoryCardContext.Provider
      value={{ cards, selectedCards, pokemonAmount, handleClick }}
    >
      {children}
    </MemoryCardContext.Provider>
  );
};

export default MemoryCardContext;
