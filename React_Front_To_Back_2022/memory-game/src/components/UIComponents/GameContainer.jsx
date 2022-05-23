import React from "react";
import "../../component_styling/GameContainer.css";

const gameContainer = ({ children }) => {
  return <div className="game-container">{children}</div>;
};

export default gameContainer;
