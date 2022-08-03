import React from "react";
import "../../component_styling/PlayGame.css";
import { useEffect, useContext } from "react";
import MemoryCardContext from "../../context/MemoryCardContext";

const PlayGame = () => {
  const { startGame } = useContext(MemoryCardContext);

  return (
    <div className="play-button-container">
      <button className="play-button" onClick={startGame}>
        PLAY GAME
      </button>
    </div>
  );
};

export default PlayGame;
