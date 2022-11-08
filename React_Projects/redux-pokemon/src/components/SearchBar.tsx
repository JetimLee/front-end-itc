import React, { MutableRefObject, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { searchPokemon, resetSearch } from "../features/slices/pokemonSlice";
import "./styling/SearchBar.css";
export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.data);
  const pokeInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const searchForPokemon = (name: string) => {
    console.log(pokemon);
    const foundPokemon = pokemon.filter((poke) => poke.name.includes(name));
    return foundPokemon;
  };
  const resetSearchList = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(resetSearch(pokemon));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (pokeInputRef.current.value.trim() !== "") {
      console.log(pokeInputRef.current.value);
      const foundPokemon = searchForPokemon(pokeInputRef.current.value);
      dispatch(searchPokemon(foundPokemon));
      pokeInputRef.current.value = "";
    } else {
      //alert the thing is empty
    }
  };
  return (
    <div className="search-bar-container">
      <div className="search-controls-grid">
        <input
          ref={pokeInputRef}
          type="search"
          spellCheck="false"
          placeholder="Search a pokemon..."
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
        <button
          onClick={(e) => resetSearchList(e)}
          className="btn btn-primary"
          type="submit"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
