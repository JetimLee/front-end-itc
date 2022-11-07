import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./interface/Layout";
import { getPokemon } from "./features/slices/pokemonSlice";
import "./App.css";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./hooks/useTypedSelector";

function App() {
  const dispatch = useAppDispatch();

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
