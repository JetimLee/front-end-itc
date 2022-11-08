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
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(params);

  const filteredPokemon = () => {
    if (pokemon.length > 0) {
      const filteredPokemon = pokemon.filter(
        (poke) => poke.id === parseFloat(params.id!)
      )[0];
      dispatch(
        filterPokemon({
          id: filteredPokemon.id,
          species: {
            name: filteredPokemon.species.name,
            url: filteredPokemon.species.url,
          },
          sprites: {
            back_default: filteredPokemon.sprites.back_default,
            front_default: filteredPokemon.sprites.front_default,
          },
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
      <p>{}</p>
    </div>
  );
};
