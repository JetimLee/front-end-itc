import { useEffect, useContext } from "react";
import { MemoryCardProvider } from "./context/MemoryCardContext";
import MemoryCardContext from "./context/MemoryCardContext";

function App() {
  const { pokemonAmount } = useContext(MemoryCardContext);
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
    return pokemons;
  };
  return (
    <MemoryCardProvider>
      <h1>gello</h1>
    </MemoryCardProvider>
  );
}

export default App;
