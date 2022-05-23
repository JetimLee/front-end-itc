import React from "react";
import "../../component_styling/PlayGame.css";
import { useEffect, useContext } from "react";
import MemoryCardContext from "../../context/MemoryCardContext";

const PlayGame = () => {
  const { startGame } = useContext(MemoryCardContext);

  return (
    <div className="play-button">
      <button onClick={startGame}>Play Game</button>
    </div>
  );
};

export default PlayGame;
