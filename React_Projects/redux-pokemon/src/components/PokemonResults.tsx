import React, { FC } from "react";
import { ActualPokemonCardResult } from "../features/slices/pokemonSlice";
import { useAppSelector } from "../hooks/useTypedSelector";
import { PokemonCard } from "./PokemonCard";
import { PokemonGrid } from "../interface/PokemonGrid";

export const PokemonResults = () => {
  const pokemon = useAppSelector((state) => state.data);
  const loading = useAppSelector((state) => state.loading);

  return (
    <PokemonGrid>
      {loading && `loading`}
      {pokemon.map((poke: ActualPokemonCardResult) => {
        return (
          <PokemonCard
            key={poke.id}
            id={poke.id}
            name={poke.species.name}
            imgUrl={poke.sprites.front_default}
          />
        );
      })}
    </PokemonGrid>
  );
};
