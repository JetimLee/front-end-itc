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
  const individualPokemon = useAppSelector((state) => state.individualPokemon);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(params);

  const filteredPokemon = () => {
    if (pokemon.length > 0) {
      const filteredPokemon = pokemon.filter(
        (poke) => poke.id === parseFloat(params.id!)
      )[0];
      dispatch(filterPokemon(filteredPokemon));
    } else {
      //do some kind of error handling here
    }
  };

  useEffect(() => {
    filteredPokemon();
    // console.log(filteredPokemon, "filtered pokemon in individual pokemon");
  }, []);

  return (
    <div>
      <p>{individualPokemon.species.name}</p>
    </div>
  );
};
