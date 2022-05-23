import React from "react";
import "../../component_styling/GameOverContainer.css";

const GameOver = ({ children }) => {
  return (
    <div className="gameover">
      <div className="gameover-container">{children}</div>
    </div>
  );
};

export default GameOver;
