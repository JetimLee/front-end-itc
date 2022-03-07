import React from "react";
import ReactDOM from "react-dom";
import { MemoryCardProvider } from "./context/MemoryCardContext";

import App from "./App";
//BE SURE TO WRAP THE APP EVERYTIME WITH CONTEXT!!!
ReactDOM.render(
  <React.StrictMode>
    <MemoryCardProvider>
      <App />
    </MemoryCardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
