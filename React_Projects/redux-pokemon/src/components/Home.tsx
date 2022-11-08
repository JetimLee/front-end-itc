import React, { FC } from "react";
import { SearchBar } from "./SearchBar";
import { PokemonResults } from "./PokemonResults";
import { useAppSelector } from "../hooks/useTypedSelector";
export const Home = () => {
  return (
    <>
      <SearchBar />
      <PokemonResults />
    </>
  );
};
