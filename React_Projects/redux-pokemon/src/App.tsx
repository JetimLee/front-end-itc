import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

import { getPokemon } from "./features/slices/pokemonSlice";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { Navbar } from "./interface/Navbar";
import { NotFound } from "./interface/NotFound";
import { IndividualPokemon } from "./components/IndividualPokemon";

function App() {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.data);

  useEffect(() => {
    if (pokemon.length === 0) {
      console.log("use effect was called");
      dispatch(getPokemon());
    } else {
      return;
    }
  }, []);
  return (
    <div>
      <Router>
        <div className="layout-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/:id" element={<IndividualPokemon />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
