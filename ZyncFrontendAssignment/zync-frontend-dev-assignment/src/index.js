import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RobotListProvider } from "./context/RobotListContext";

ReactDOM.render(
  <React.StrictMode>
    <RobotListProvider>
      <App />
    </RobotListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
