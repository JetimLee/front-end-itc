import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./interface/Layout";
import { PokemonGrid } from "./interface/PokemonGrid";
import { PokemonCard } from "./components/PokemonCard";
import {
  getPokemon,
  ActualPokemonCardResult,
} from "./features/slices/pokemonSlice";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";

function App() {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.data);
  console.log(pokemon, "hey pokemon");

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <SearchBar />
        <PokemonGrid>
          {pokemon.map((poke: ActualPokemonCardResult) => {
            return (
              <PokemonCard
                name={poke.species.name}
                imgUrl={poke.sprites.front_default}
              />
            );
          })}
        </PokemonGrid>
      </Layout>
    </div>
  );
}

export default App;
