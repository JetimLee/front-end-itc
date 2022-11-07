import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./interface/Layout";
import { getPokemon } from "./features/slices/pokemonSlice";
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
      </Layout>
    </div>
  );
}

export default App;
