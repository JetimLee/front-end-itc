import { useEffect, useContext } from "react";
import { MemoryCardProvider } from "./context/MemoryCardContext";
import MemoryCardContext from "./context/MemoryCardContext";
import PokemonGrid from "./components/PokemonGameComponents/PokemonGrid";
import PokemonCard from "./components/PokemonGameComponents/PokemonCard";
import "./app_styling/app.css";

function App() {
  const { pokemonAmount, cards, setCards, selectedCards } =
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
  return (
    //need to pass down the props to each card and destructure them from within the card props. Then display the information and style the cards as necessary
    <MemoryCardProvider>
      <PokemonGrid>
        {cards.map((pokemon) => {
          return (
            <PokemonCard
              pokemonObj={pokemon}
              src={pokemon.image}
              name={pokemon.name}
              key={pokemon.id}
            />
          );
        })}
      </PokemonGrid>
    </MemoryCardProvider>
  );
}

export default App;
