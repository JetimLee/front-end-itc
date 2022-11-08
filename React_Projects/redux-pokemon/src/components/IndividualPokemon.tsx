import React, { useEffect, useMemo, useState } from "react";
// interface Props {
//     name: string;
//     imgUrl: string;
//     id: number;
//   }
import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useTypedSelector";
import { filterPokemon } from "../features/slices/pokemonSlice";
import { useAppDispatch } from "../hooks/useTypedSelector";

export const IndividualPokemon = () => {
  const pokemon = useAppSelector((state) => state.data);
  const individual = useAppSelector((state) => state.individualPokemon);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(params);

  const filteredPokemon = () => {
    if (pokemon.length > 0) {
      const filteredPokemon = pokemon.filter(
        (poke) => poke.id === parseFloat(params.id!)
      )[0];
      console.log(filteredPokemon, "filtered pokemon");
      dispatch(
        filterPokemon({
          id: filteredPokemon.id,
          species: filteredPokemon.species,
          sprites: filteredPokemon.sprites,
        })
      );
    }
  };

  useEffect(() => {
    filteredPokemon();
    // console.log(filteredPokemon, "filtered pokemon in individual pokemon");
  }, []);

  return (
    <div>
      {Object.keys(individual).length !== 0 && <p>{individual.species.name}</p>}
    </div>
  );
};
