import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./components/PokemonGameComponents/AppWrapper";

import App from "./App";
//BE SURE TO WRAP THE APP EVERYTIME WITH CONTEXT!!!
ReactDOM.render(
  <React.StrictMode>
    <AppWrapper></AppWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
